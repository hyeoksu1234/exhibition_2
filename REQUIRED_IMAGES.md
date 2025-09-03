# 필요한 이미지 및 폰트 파일 리스트

## 폰트 파일
### RixDongnimGothic Pro 폰트
**※ Adobe Fonts (Typekit)를 통해 제공됨 (Kit ID: yvm1rwe)**
- 로컬 폰트 파일은 선택사항 (Adobe Fonts 로드 실패 시 폴백용):
  - `/public/fonts/rixdongnimgothic-pro.woff` - RixDongnimGothic Pro WOFF 형식
  - `/public/fonts/rixdongnimgothic-pro.woff2` - RixDongnimGothic Pro WOFF2 형식
  - `/public/fonts/rixdongnimgothic-pro.ttf` - RixDongnimGothic Pro TTF 형식

### Pretendard 폰트
- `/public/fonts/Pretendard-Light.woff` - Pretendard Light
- `/public/fonts/Pretendard-Light.woff2` - Pretendard Light WOFF2
- `/public/fonts/Pretendard-Regular.woff` - Pretendard Regular
- `/public/fonts/Pretendard-Regular.woff2` - Pretendard Regular WOFF2
- `/public/fonts/Pretendard-Medium.woff` - Pretendard Medium
- `/public/fonts/Pretendard-Medium.woff2` - Pretendard Medium WOFF2
- `/public/fonts/Pretendard-SemiBold.woff` - Pretendard SemiBold
- `/public/fonts/Pretendard-SemiBold.woff2` - Pretendard SemiBold WOFF2
- `/public/fonts/Pretendard-Bold.woff` - Pretendard Bold
- `/public/fonts/Pretendard-Bold.woff2` - Pretendard Bold WOFF2

## 1. Hero 섹션 이미지
- `/public/images/hero/hero_main.png` - 메인 히어로 이미지 (나중에 비디오로 교체 예정)
- `/public/images/hero/map.png` - 전시장 위치 지도 이미지

## 2. SVG 아이콘
- `/public/svg/su.svg` - 지하철 아이콘
- `/public/svg/two.svg` - 지하철 2호선 아이콘
- `/public/svg/bus.svg` - 버스 아이콘
- `/public/svg/seoul.svg` - THE SEOULITEUM 로고
- `/public/svg/rix.svg` - RixFont 로고
- `/public/svg/yoon.svg` - Yoondesign 로고
- `/public/svg/ads.svg` - 무주 ADSLAND 로고

## 3. 디자이너 프로필 이미지 (104명)
- `/public/images/profiles/user-1.jpg` ~ `/public/images/profiles/user-104.jpg`
  - 각 파일은 실제 학생 순서대로 매핑됨 (student-data.ts 파일 참조)
  - 정사각형 비율 권장 (최소 300x300px)

## 4. 작품 이미지
### 작품별 이미지 구조
- 각 작품은 고유한 ID를 가지며, 다음과 같은 이미지 파일이 필요합니다:
  - `/public/images/works/work-{id}-thumb.jpg` - 작품 썸네일
  - `/public/images/works/work-{id}-1.jpg` ~ `/public/images/works/work-{id}-6.jpg` - 작품 상세 이미지 (3-6장)
  
### 예상 작품 수
- 104명의 학생 × 평균 1-3개 작품 = 약 200-300개의 작품
- 각 작품당 4-7개의 이미지 필요 (썸네일 1개 + 상세 3-6개)

## 5. 전시장 아카이브 이미지
- `/public/images/archive/image-1.jpg` - 전시장 이미지 1
- `/public/images/archive/image-2.jpg` - 전시장 이미지 2
- `/public/images/archive/image-3.jpg` - 전시장 이미지 3
- `/public/images/archive/image-4.jpg` - 전시장 이미지 4
- `/public/images/archive/image-5.jpg` - 전시장 이미지 5
- `/public/images/archive/image-6.jpg` - 전시장 이미지 6
- `/public/images/archive/image-7.jpg` - 전시장 이미지 7
- `/public/images/archive/image-8.jpg` - 전시장 이미지 8
- `/public/images/archive/image-9.jpg` - 전시장 이미지 9
- `/public/images/archive/image-10.jpg` - 전시장 이미지 10
- `/public/images/archive/image-11.jpg` - 전시장 이미지 11
- `/public/images/archive/image-12.jpg` - 전시장 이미지 12

## 이미지 준비 시 참고사항

1. **Hero 섹션**
   - hero_main.png: 16:9 비율의 고해상도 이미지 필요
   - map.png: 540x730px 크기의 전시장 위치 지도

2. **SVG 로고**
   - 각 후원업체 로고는 SVG 형식으로 준비
   - 크기: 180px width 기준으로 제작

3. **프로필 이미지**
   - 정사각형 비율 권장
   - 최소 300x300px 이상

4. **작품 이미지**
   - 썸네일: 정사각형 비율 권장
   - 상세 이미지: 다양한 비율 가능하나 고해상도 필요

5. **아카이브 이미지**
   - 16:9 비율 권장
   - 전시장 모습, 오프닝, 관람객, 작품 등 다양한 장면 포함

## 폰트 파일 준비 시 참고사항

1. **RixDongnimGothic Pro**
   - 웹폰트 형식(WOFF2, WOFF) 권장
   - TTF는 폴백용으로 준비
   - 메인 본문 폰트로 사용됨

2. **Pretendard**
   - Light(300), Regular(400), Medium(500), SemiBold(600), Bold(700) 웨이트 필요
   - WOFF2와 WOFF 형식 모두 준비
   - 보조 텍스트와 UI 요소에 사용됨
