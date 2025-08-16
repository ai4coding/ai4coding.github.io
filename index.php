<?php
// assets/get/index.php
// 처리할 URL: https://www.gorillacell.kr/scratch/assets/파일명.확장자/get/

// .htaccess에서 전달된 파일명 또는 URL에서 직접 추출
$filename = $_GET['file'] ?? '';

// 파일명이 없으면 URL에서 직접 추출 시도
if (!$filename) {
    $requestUri = $_SERVER['REQUEST_URI'];
    if (preg_match('/\/scratch\/assets\/([^\/]+)\/get\/?/', $requestUri, $matches)) {
        $filename = $matches[1];
    }
}

if ($filename) {
    // 보안: 상위 디렉토리 접근 방지
    $filename = basename($filename);
    
    // assets 폴더의 실제 파일 경로 (get 폴더의 상위 폴더)
    $filepath = dirname(__DIR__) . '/' . $filename;
    
    // 파일 존재 여부 확인
    if (file_exists($filepath) && is_file($filepath)) {
        // 파일 확장자에 따른 MIME 타입 설정
        $extension = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        $mimeTypes = [
            'svg' => 'image/svg+xml',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'wav' => 'audio/wav',
            'mp3' => 'audio/mpeg',
            'json' => 'application/json'
        ];
        
        $mimeType = isset($mimeTypes[$extension]) ? $mimeTypes[$extension] : 'application/octet-stream';
        
        // HTTP 헤더 설정
        header('Content-Type: ' . $mimeType);
        header('Content-Length: ' . filesize($filepath));
        header('Cache-Control: public, max-age=31536000'); // 1년 캐시
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET');
        header('Access-Control-Allow-Headers: Content-Type');
        
        // 파일 내용 출력
        readfile($filepath);
        exit;
    } else {
        // 파일이 없는 경우
        http_response_code(404);
        header('Content-Type: text/plain');
        echo 'File not found: ' . $filepath;
        exit;
    }
} else {
    // 파일명을 찾을 수 없는 경우
    http_response_code(400);
    header('Content-Type: text/plain');
    echo 'No filename specified in URL: ' . $_SERVER['REQUEST_URI'];
    exit;
}
?>