export function getContrastTextColor(hexColor: string): 'black' | 'white' {
    // 1. '#RRGGBB' 형태의 HEX 코드를 파싱하여 RGB 값을 추출합니다.
    // # 제거 후 6자리로 가정
    const hex = hexColor.replace('#', '');

    // R, G, B 값 추출 및 10진수로 변환
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // 2. 휘도 (Luminance) 계산 (ITU-R BT.709 표준)
    // 이 공식은 인간의 눈이 R, G, B 중 녹색(G)을 가장 민감하게 인식하는 것을 반영합니다.
    const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

    // 3. 임계값(Threshold)을 기준으로 텍스트 색상 결정
    // 임계값은 0~255 사이의 값으로, 보통 128~150 사이를 사용합니다.
    // 140을 기준으로 하겠습니다.
    const threshold = 140;

    // 휘도가 높으면 (밝으면) 검은색 텍스트, 낮으면 (어두우면) 흰색 텍스트
    return luminance > threshold ? 'black' : 'white';
}