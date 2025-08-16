import {ScratchStorage, Asset} from 'scratch-storage';

import defaultProject from './default-project';
import {GUIStorage, TranslatorFunction} from '../gui-config';

import saveProjectToServer from '../lib/save-project-to-server';

export class LegacyStorage implements GUIStorage {
    private projectHost?: string;
    private projectToken?: string;
    private assetHost?: string;
    private backpackHost?: string;
    private translator?: TranslatorFunction;

    readonly scratchStorage = new ScratchStorage();

    constructor () {
        console.log('=== LegacyStorage 생성자 호출됨 ===');
        this.cacheDefaultProject(this.scratchStorage);
        this.addOfficialScratchWebStores(this.scratchStorage);
    }

    setProjectHost (host: string): void {
        this.projectHost = host;
    }

    setProjectToken (token: string): void {
        this.projectToken = token;
    }

    setProjectMetadata (projectId: string | null | undefined): void {
        const {RequestMetadata, setMetadata, unsetMetadata} = this.scratchStorage.scratchFetch;

        // If project ID is '0' or zero, it's not a real project ID. In that case, remove the project ID metadata.
        // Same if it's null undefined.
        if (projectId && projectId !== '0') {
            setMetadata(RequestMetadata.ProjectId, projectId);
        } else {
            unsetMetadata(RequestMetadata.ProjectId);
        }
    }

    setAssetHost (host: string): void {
        this.assetHost = host;
    }

    setTranslatorFunction (translator: TranslatorFunction): void {
        this.translator = translator;

        // TODO: Verify that this is correct
        this.cacheDefaultProject(this.scratchStorage);
    }

    setBackpackHost (host: string): void {
        const shouldAddSource = !this.backpackHost;
        if (shouldAddSource) {
            const AssetType = this.scratchStorage.AssetType;

            this.scratchStorage.addWebStore(
                [AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound],
                this.getBackpackAssetURL.bind(this)
            );
        }

        this.backpackHost = host;
    }

    saveProject (
        projectId: number,
        vmState: string,
        params: { originalId: string; isCopy: boolean; isRemix: boolean; title: string; }
    ): Promise<{ id: string | number; }> {
        // Haven't inlined the code here so that we can keep Git history on the implementation, just in case
        return saveProjectToServer(this.projectHost, projectId, vmState, params);
    }

    private cacheDefaultProject (storage: ScratchStorage) {
        const defaultProjectAssets = defaultProject(this.translator);
        defaultProjectAssets.forEach(asset => storage.builtinHelper._store(
            storage.AssetType[asset.assetType],
            storage.DataFormat[asset.dataFormat],
            asset.data,
            asset.id
        ));
    }

    private addOfficialScratchWebStores (storage: ScratchStorage) {
        storage.addWebStore(
            [storage.AssetType.Project],
            this.getProjectGetConfig.bind(this),
            this.getProjectCreateConfig.bind(this),
            this.getProjectUpdateConfig.bind(this)
        );

        storage.addWebStore(
            [storage.AssetType.ImageVector, storage.AssetType.ImageBitmap, storage.AssetType.Sound],
            this.getAssetGetConfig.bind(this),
            // We set both the create and update configs to the same method because
            // storage assumes it should update if there is an assetId, but the
            // asset store uses the assetId as part of the create URI.
            this.getAssetCreateConfig.bind(this),
            this.getAssetCreateConfig.bind(this)
        );

        storage.addWebStore(
            [storage.AssetType.Sound],
            asset => `static/extension-assets/scratch3_music/${asset.assetId}.${asset.dataFormat}`
        );
    }

    private getProjectGetConfig (projectAsset) {
        const path = `${this.projectHost}/${projectAsset.assetId}`;
        const qs = this.projectToken ? `?token=${this.projectToken}` : '';
        return path + qs;
    }

    private getProjectCreateConfig () {
        return {
            url: `${this.projectHost}/`,
            withCredentials: true
        };
    }

    private getProjectUpdateConfig (projectAsset: Asset) {
        return {
            url: `${this.projectHost}/${projectAsset.assetId}`,
            withCredentials: true
        };
    }

    private shouldUseLocalAsset(asset: Asset): boolean {
        // WAV 파일은 항상 내부 에셋 사용
        if (asset.dataFormat === 'wav') return true;
        
        // 스프라이트 관련 이미지와 백그라운드는 내부 에셋 사용
        // AssetType.ImageVector (SVG), AssetType.ImageBitmap (PNG/JPG)
        if (asset.assetType === this.scratchStorage.AssetType.ImageVector || 
            asset.assetType === this.scratchStorage.AssetType.ImageBitmap) {
            return true;
        }
        
        return false;
    }

    private getAssetGetConfig (asset: Asset) {
    console.log('=== getAssetGetConfig 호출됨 ===', {
        assetId: asset.assetId,
        dataFormat: asset.dataFormat,
        assetType: asset.assetType
    });
    
    if (this.shouldUseLocalAsset(asset)) {
        const url = `https://www.gorillacell.kr/scratch/assets/${asset.assetId}.${asset.dataFormat}`;
        console.log('내부 에셋 URL:', url);
        return url;
    } else {
        const url = `${this.assetHost}/internalapi/asset/${asset.assetId}.${asset.dataFormat}/get/`;
        console.log('외부 에셋 URL:', url);
        return url;
    }
}

    private getAssetCreateConfig (asset: Asset) {
        return {
            // There is no such thing as updating assets, but storage assumes it
            // should update if there is an assetId, and the asset store uses the
            // assetId as part of the create URI. So, force the method to POST.
            // Then when storage finds this config to use for the "update", still POSTs
            method: 'post',
            url: `${this.assetHost}/${asset.assetId}.${asset.dataFormat}`,
            withCredentials: true
        };
    }

    private getBackpackAssetURL (asset) {
        return `${this.backpackHost}/${asset.assetId}.${asset.dataFormat}`;
    }
}