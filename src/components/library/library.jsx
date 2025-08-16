import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import LibraryItem from '../../containers/library-item.jsx';
import Modal from '../../containers/modal.jsx';
import Divider from '../divider/divider.jsx';
import Filter from '../filter/filter.jsx';
import TagButton from '../../containers/tag-button.jsx';
import {legacyConfig} from '../../legacy-config';
import Spinner from '../spinner/spinner.jsx';
import {CATEGORIES} from '../../../src/lib/libraries/decks/index.jsx';

import styles from './library.css';

const messages = defineMessages({
    filterPlaceholder: {
        id: 'gui.library.filterPlaceholder',
        defaultMessage: 'Search',
        description: 'Placeholder text for library search field'
    },
    allTag: {
        id: 'gui.library.allTag',
        defaultMessage: 'All',
        description: 'Label for library tag to revert to all items after filtering by tag.'
    },
    // Strings here need to be defined statically
    // https://formatjs.io/docs/getting-started/message-declaration/#pre-declaring-using-definemessage-for-later-consumption-less-recommended
    [CATEGORIES.gettingStarted]: {
        id: `gui.library.gettingStarted`,
        defaultMessage: 'Getting Started',
        description: 'Label for getting started category'
    },
    [CATEGORIES.basics]: {
        id: `gui.library.basics`,
        defaultMessage: 'Basics',
        description: 'Label for basics category'
    },
    [CATEGORIES.intermediate]: {
        id: `gui.library.intermediate`,
        defaultMessage: 'Intermediate',
        description: 'Label for intermediate category'
    },
    [CATEGORIES.prompts]: {
        id: `gui.library.prompts`,
        defaultMessage: 'Prompts',
        description: 'Label for prompts category'
    }
});

const ALL_TAG = {tag: 'all', intlLabel: messages.allTag};
const tagListPrefix = [ALL_TAG];

/**
 * Find the AssetType which corresponds to a particular file extension. For example, 'png' => AssetType.ImageBitmap.
 * @param {string} fileExtension - the file extension to look up.
 * @returns {AssetType} - the AssetType corresponding to the extension, if any.
 */
const getAssetTypeForFileExtension = function (fileExtension) {
    const compareOptions = {
        sensitivity: 'accent',
        usage: 'search'
    };
    const storage = legacyConfig.storage.scratchStorage;
    for (const assetTypeId in storage.AssetType) {
        const assetType = storage.AssetType[assetTypeId];
        if (fileExtension.localeCompare(assetType.runtimeFormat, compareOptions) === 0) {
            return assetType;
        }
    }
};

/**
 * 내부 에셋 사용 여부를 판단하는 함수
 * 스프라이트, 백그라운드, WAV 파일만 내부 에셋 사용
 */
const shouldUseLocalAsset = function (dataFormat, libraryType) {
    // WAV 파일은 항상 내부 에셋 사용
    if (dataFormat === 'wav') return true;
    
    // 라이브러리 타입이 스프라이트나 백그라운드일 때만 내부 에셋 사용
    if (libraryType === 'sprite' || libraryType === 'backdrop' ) {
        return true;
    }
    
    return false;
};

/**
 * Figure out one or more icon(s) for a library item.
 * If it's an animated thumbnail, this will return an array of `imageSource`.
 * Otherwise it'll return just one `imageSource`.
 * @param {object} item - either a library item or one of a library item's costumes.
 *   The latter is used internally as part of processing an animated thumbnail.
 * @param {string} libraryType - 라이브러리 타입 (sprite, backdrop, sound 등)
 * @returns {LibraryItem.PropTypes.icons} - an `imageSource` or array of them
 */
const getItemIcons = function (item, libraryType) {
    const costumes = (item.json && item.json.costumes) || item.costumes;
    if (costumes) {
        return costumes.map(costume => getItemIcons(costume, libraryType));
    }

    if (item.rawURL) {
        return {
            uri: item.rawURL
        };
    }

    if (item.assetId && item.dataFormat) {
        const useLocalAsset = shouldUseLocalAsset(item.dataFormat, libraryType);
        
        let assetServiceUri;
        if (useLocalAsset) {
            // 내부 에셋: /get/ 없이 직접 파일 접근
            assetServiceUri = `https://www.gorillacell.kr/scratch/assets/${item.assetId}.${item.dataFormat}`;
        } else {
            // 외부 에셋: 기존 방식 유지
            assetServiceUri = `https://cdn.assets.scratch.mit.edu/internalapi/asset/${item.assetId}.${item.dataFormat}/get/`;
        }
        console.log('Generated URL:', assetServiceUri); // 디버그
        
        return {
            assetId: item.assetId,
            assetType: getAssetTypeForFileExtension(item.dataFormat),
            assetServiceUri: assetServiceUri
        };
    }

    const md5ext = item.md5ext || item.md5 || item.baseLayerMD5;
    if (md5ext) {
        const [assetId, fileExtension] = md5ext.split('.');
        const useLocalAsset = shouldUseLocalAsset(fileExtension, libraryType);
        
        let assetServiceUri;
        if (useLocalAsset) {
            // 내부 에셋: /get/ 없이 직접 파일 접근
            assetServiceUri = `https://www.gorillacell.kr/scratch/assets/${md5ext}`;
        } else {
            // 외부 에셋: 기존 방식 유지
            assetServiceUri = `https://cdn.assets.scratch.mit.edu/internalapi/asset/${md5ext}/get/`;
        }
        
        return {
            assetId: assetId,
            assetType: getAssetTypeForFileExtension(fileExtension),
            assetServiceUri: assetServiceUri
        };
    }
};

class LibraryComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClose',
            'handleFilterChange',
            'handleFilterClear',
            'handleMouseEnter',
            'handleMouseLeave',
            'handlePlayingEnd',
            'handleSelect',
            'handleTagClick',
            'setFilteredDataRef'
        ]);
        this.state = {
            playingItem: null,
            filterQuery: '',
            selectedTag: ALL_TAG.tag,
            loaded: false
        };
    }
    componentDidMount () {
        // Allow the spinner to display before loading the content
        setTimeout(() => {
            this.setState({loaded: true});
        });
        if (this.props.setStopHandler) this.props.setStopHandler(this.handlePlayingEnd);
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevState.filterQuery !== this.state.filterQuery ||
            prevState.selectedTag !== this.state.selectedTag) {
            this.scrollToTop();
        }
    }
    handleSelect (id) {
        this.handleClose();
        this.props.onItemSelected(this.getFilteredData()
            .find(item => this.constructKey(item) === id));
    }
    handleClose () {
        this.props.onRequestClose();
    }
    handleTagClick (tag) {
        if (this.state.playingItem === null) {
            this.setState({
                filterQuery: '',
                selectedTag: tag.toLowerCase()
            });
        } else {
            this.props.onItemMouseLeave((this.getFilteredData()
                .find(item => this.constructKey(item) === this.state.playingItem)));
            this.setState({
                filterQuery: '',
                playingItem: null,
                selectedTag: tag.toLowerCase()
            });
        }
    }
    handleMouseEnter (id) {
        // don't restart if mouse over already playing item
        if (this.props.onItemMouseEnter && this.state.playingItem !== id) {
            this.props.onItemMouseEnter(this.getFilteredData()
                .find(item => this.constructKey(item) === id));
            this.setState({
                playingItem: id
            });
        }
    }
    handleMouseLeave (id) {
        if (this.props.onItemMouseLeave) {
            this.props.onItemMouseLeave(this.getFilteredData()
                .find(item => this.constructKey(item) === id));
            this.setState({
                playingItem: null
            });
        }
    }
    handlePlayingEnd () {
        if (this.state.playingItem !== null) {
            this.setState({
                playingItem: null
            });
        }
    }
    handleFilterChange (event) {
        if (this.state.playingItem === null) {
            this.setState({
                filterQuery: event.target.value,
                selectedTag: ALL_TAG.tag
            });
        } else {
            this.props.onItemMouseLeave(this.getFilteredData()
                .find(item => this.constructKey(item) === this.state.playingItem));
            this.setState({
                filterQuery: event.target.value,
                playingItem: null,
                selectedTag: ALL_TAG.tag
            });
        }
    }
    handleFilterClear () {
        this.setState({filterQuery: ''});
    }
    getFilteredData () {
        if (this.state.selectedTag === ALL_TAG.tag) {
            if (!this.state.filterQuery) return this.props.data;
            return this.props.data.filter(dataItem => (
                (dataItem.tags || [])
                    // Second argument to map sets `this`
                    .map(String.prototype.toLowerCase.call, String.prototype.toLowerCase)
                    .concat(dataItem.name ?
                        (typeof dataItem.name === 'string' ?
                        // Use the name if it is a string, else use formatMessage to get the translated name
                            dataItem.name : this.props.intl.formatMessage(dataItem.name.props)
                        ).toLowerCase() :
                        null)
                    .join('\n') // unlikely to partially match newlines
                    .indexOf(this.state.filterQuery.toLowerCase()) !== -1
            ));
        }
        return this.props.data.filter(dataItem => (
            dataItem.tags &&
            dataItem.tags
                .map(String.prototype.toLowerCase.call, String.prototype.toLowerCase)
                .indexOf(this.state.selectedTag) !== -1
        ));
    }
    constructKey (data) {
        return typeof data.name === 'string' ? data.name : data.rawURL;
    }
    scrollToTop () {
        this.filteredDataRef.scrollTop = 0;
    }
    setFilteredDataRef (ref) {
        this.filteredDataRef = ref;
    }
    renderElement (data) {
        const key = this.constructKey(data);
        const icons = getItemIcons(data, this.props.libraryType);
        return (<LibraryItem
            bluetoothRequired={data.bluetoothRequired}
            collaborator={data.collaborator}
            description={data.description}
            disabled={data.disabled}
            extensionId={data.extensionId}
            featured={data.featured}
            hidden={data.hidden}
            icons={icons}
            id={key}
            insetIconURL={data.insetIconURL}
            internetConnectionRequired={data.internetConnectionRequired}
            isPlaying={this.state.playingItem === key}
            key={key}
            name={data.name}
            showPlayButton={this.props.showPlayButton}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onSelect={this.handleSelect}
        />);
    }
    renderData (data) {
        if (this.state.selectedTag !== ALL_TAG.tag || !this.props.withCategories) {
            return data.map(item => this.renderElement(item));
        }

        // Object.groupBy is not available on older versions of javascript
        const dataByCategory = data.reduce((acc, el) => {
            acc[el.category] = acc[el.category] || [];
            acc[el.category].push(el);
            return acc;
        }, {});
        const categoriesOrder = Object.values(CATEGORIES);

        return Object.entries(dataByCategory)
            .sort(([key1], [key2]) => categoriesOrder.indexOf(key1) - categoriesOrder.indexOf(key2))
            .map(([key, values]) =>
                (<div
                    key={key}
                    className={styles.libraryCategory}
                >
                    {key === 'undefined' ?
                        null :
                        <span className={styles.libraryCategoryTitle}>
                            {this.props.intl.formatMessage(messages[key])}
                        </span>
                    }
                    <div
                        className={styles.libraryCategoryItems}
                    >
                        {values.map(item => this.renderElement(item))}
                    </div>
                </div>));
    }
    render () {
        return (
            <Modal
                fullScreen
                contentLabel={this.props.title}
                id={this.props.id}
                onRequestClose={this.handleClose}
            >
                {(this.props.filterable || this.props.tags) && (
                    <div className={styles.filterBar}>
                        {this.props.filterable && (
                            <Filter
                                className={classNames(
                                    styles.filterBarItem,
                                    styles.filter
                                )}
                                filterQuery={this.state.filterQuery}
                                inputClassName={styles.filterInput}
                                placeholderText={this.props.intl.formatMessage(messages.filterPlaceholder)}
                                onChange={this.handleFilterChange}
                                onClear={this.handleFilterClear}
                            />
                        )}
                        {this.props.filterable && this.props.tags && (
                            <Divider className={classNames(styles.filterBarItem, styles.divider)} />
                        )}
                        {this.props.tags &&
                            <div className={styles.tagWrapper}>
                                {tagListPrefix.concat(this.props.tags).map((tagProps, id) => (
                                    <TagButton
                                        active={this.state.selectedTag === tagProps.tag.toLowerCase()}
                                        className={classNames(
                                            styles.filterBarItem,
                                            styles.tagButton,
                                            tagProps.className
                                        )}
                                        key={`tag-button-${id}`}
                                        onClick={this.handleTagClick}
                                        {...tagProps}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                )}
                <div
                    className={classNames(styles.libraryScrollGrid, {
                        [styles.withFilterBar]: this.props.filterable || this.props.tags
                    })}
                    ref={this.setFilteredDataRef}
                >
                    {this.state.loaded ? this.renderData(this.getFilteredData()) : (
                        <div className={styles.spinnerWrapper}>
                            <Spinner
                                large
                                level="primary"
                            />
                        </div>
                    )}
                </div>
            </Modal>
        );
    }
}

LibraryComponent.propTypes = {
    data: PropTypes.arrayOf(
        /* eslint-disable react/no-unused-prop-types, lines-around-comment */
        // An item in the library
        PropTypes.shape({
            // @todo remove md5/rawURL prop from library, refactor to use storage
            md5: PropTypes.string,
            name: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]),
            rawURL: PropTypes.string
        })
        /* eslint-enable react/no-unused-prop-types, lines-around-comment */
    ),
    filterable: PropTypes.bool,
    withCategories: PropTypes.bool,
    id: PropTypes.string.isRequired,
    intl: intlShape.isRequired,
    libraryType: PropTypes.string,
    onItemMouseEnter: PropTypes.func,
    onItemMouseLeave: PropTypes.func,
    onItemSelected: PropTypes.func,
    onRequestClose: PropTypes.func,
    setStopHandler: PropTypes.func,
    showPlayButton: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.shape(TagButton.propTypes)),
    title: PropTypes.string.isRequired
};

LibraryComponent.defaultProps = {
    filterable: true,
    showPlayButton: false
};

export default injectIntl(LibraryComponent);