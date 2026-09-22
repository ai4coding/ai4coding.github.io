#!/usr/bin/env python3
"""
fetch_vendor.py — CDN 라이브러리를 same-origin self-host용으로 내려받는다.

목적: 학교 방화벽/오프라인/캐시청소 환경에서도 BrixelAI AI 확장이 항상 동작하도록
      jsdelivr 의존 라이브러리를 /static/vendor/ 로 가져온다.
      (BrixelAI 가 열리는 환경이면 same-origin 이라 100% 로드됨)

실행:  python fetch_vendor.py              # 전체
       python fetch_vendor.py mediapipe    # mediapipe 전체 미러
       python fetch_vendor.py tfjs tfmodels
재실행 안전: 이미 받은 파일은 건너뜀.

★ mediapipe 는 패키지마다 파일명이 달라(예: hands.binarypb vs pose_web.binarypb)
  수동 목록이 위험하므로 jsdelivr 파일목록 API 로 패키지 전체를 자동 미러한다.
  (binarypb 그래프 정의가 빠지면 wasm loadGraph 가 abort 됨)
"""
import os
import sys
import json
import urllib.request

BASE = os.path.dirname(os.path.abspath(__file__))
CDN = "https://cdn.jsdelivr.net/npm"
DATA_API = "https://data.jsdelivr.com/v1/packages/npm"

# mediapipe 솔루션 — 패키지 전체 미러 (heavy 모델만 제외)
MEDIAPIPE_PKGS = [
    "hands", "pose", "face_mesh", "face_detection", "selfie_segmentation",
    "camera_utils", "drawing_utils", "control_utils",
]

# 단일 JS 라이브러리 (로컬경로, 원격경로, [파일])
SINGLE = {
    "tfjs_4_22": ("tfjs/4.22.0", "@tensorflow/tfjs@4.22.0/dist", ["tf.min.js"]),
    "tfjs_1_3":  ("tfjs/1.3.1",  "@tensorflow/tfjs@1.3.1/dist",  ["tf.min.js"]),
    # tf 기반 모델 라이브러리
    "mobilenet": ("tfmodels/mobilenet", "@tensorflow-models/mobilenet@2.1.1/dist", ["mobilenet.min.js"]),
    "posenet":   ("tfmodels/posenet", "@tensorflow-models/posenet@2.2.2/dist", ["posenet.min.js"]),
    "bodypix":   ("tfmodels/body-pix", "@tensorflow-models/body-pix@2.2.0/dist", ["body-pix.min.js"]),
    "tm_image":  ("tfmodels/teachablemachine-image", "@teachablemachine/image@0.8/dist", ["teachablemachine-image.min.js"]),
    "tm_pose":   ("tfmodels/teachablemachine-pose", "@teachablemachine/pose@0.8/dist", ["teachablemachine-pose.min.js"]),
}


def _get(url, timeout=60):
    req = urllib.request.Request(url, headers={"User-Agent": "brixel-vendor-fetch"})
    return urllib.request.urlopen(req, timeout=timeout)


def fetch_file(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return True, "skip"
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    try:
        data = _get(url).read()
        with open(dest, "wb") as f:
            f.write(data)
        return True, f"{len(data)}B"
    except Exception as e:
        if os.path.exists(dest):
            os.remove(dest)
        return False, str(e)


def mirror_mediapipe():
    """각 mediapipe 솔루션 패키지의 전체 파일을 미러 (heavy 제외)."""
    ok = fail = 0
    for sol in MEDIAPIPE_PKGS:
        try:
            meta = json.load(_get(f"{DATA_API}/@mediapipe/{sol}"))
            ver = meta["tags"]["latest"]
            files = json.load(_get(f"{DATA_API}/@mediapipe/{sol}@{ver}?structure=flat")).get("files", [])
        except Exception as e:
            print(f"  ! {sol}: 목록 조회 실패 {e}")
            fail += 1
            continue
        new = 0
        for f in files:
            name = f["name"].lstrip("/")
            if name.endswith((".ts", ".md")) or name == "package.json":
                continue
            if "heavy" in name:  # 27MB heavy 모델 제외(거의 미사용)
                continue
            dest = os.path.join(BASE, "mediapipe", sol, name)
            good, info = fetch_file(f"{CDN}/@mediapipe/{sol}@{ver}/{name}", dest)
            if good:
                if info != "skip":
                    new += 1
                ok += 1
            else:
                print(f"  ! {sol}/{name}: {info}")
                fail += 1
        print(f"== mediapipe/{sol}@{ver}: {len(files)} listed, {new} new ==")
    return ok, fail


def fetch_single(groups):
    ok = fail = 0
    for g in groups:
        if g not in SINGLE:
            continue
        local_sub, remote_pkg, files = SINGLE[g]
        for fn in files:
            dest = os.path.join(BASE, local_sub, fn)
            good, info = fetch_file(f"{CDN}/{remote_pkg}/{fn}", dest)
            if good:
                ok += 1
                print(f"  + {local_sub}/{fn} ({info})")
            else:
                fail += 1
                print(f"  ! {local_sub}/{fn}: {info}")
    return ok, fail


def main():
    args = sys.argv[1:]
    do_mp = (not args) or ("mediapipe" in args)
    do_single = (not args) or ("tfjs" in args) or ("tfmodels" in args) or \
                any(a in SINGLE for a in args)

    tot_ok = tot_fail = 0
    if do_mp:
        print("== MediaPipe 전체 미러 ==")
        o, f = mirror_mediapipe()
        tot_ok += o; tot_fail += f
    if do_single:
        print("== 단일 JS 라이브러리 ==")
        # tfjs/tfmodels 키워드면 해당 전체, 아니면 명시된 그룹만
        groups = list(SINGLE.keys()) if (not args or "tfjs" in args or "tfmodels" in args) \
            else [a for a in args if a in SINGLE]
        o, f = fetch_single(groups)
        tot_ok += o; tot_fail += f

    print(f"\n완료: 성공 {tot_ok} / 실패 {tot_fail}")
    sys.exit(1 if tot_fail else 0)


if __name__ == "__main__":
    main()
