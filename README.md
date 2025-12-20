[README.md](https://github.com/user-attachments/files/24272824/README.md)
# 🎯 MoneyButler 랜딩페이지

**당신의 손 안의 개인 자산관리사**

부자들만 누리던 PB(Private Banker)를 월 4,950원에 손 안에서 이용하세요.

---

## 📋 프로젝트 개요

- **서비스명**: MoneyButler
- **한 줄 소개**: AI 기반 게임화된 개인 자산관리 앱
- **출시 예정**: 2026년 3월
- **타겟**: 재테크에 관심 있지만 실행력 부족한 20-30대

---

## 🎨 디자인 컨셉

### 색상 팔레트
```css
- 진한 네이비 (#1A2332): 메인 컬러, 신뢰감
- 화이트 (#FFFFFF): 배경, 깔끔함
- 골드 (#D4AF37): 하이라이트, 부의 상징
- 연한 골드 (#F4E5C3): 호버 효과
```

### 디자인 철학
- **프라이빗 뱅킹 느낌**: 고급스럽고 신뢰감 있는 디자인
- **미니멀**: 충분한 여백과 깔끔한 레이아웃
- **절제된 골드**: 과도하지 않게 포인트로만 사용

---

## 🚀 5분 안에 배포하기

### **방법 1: Netlify Drop (제일 쉬움!)**

1. **[Netlify.com](https://www.netlify.com/)** 접속
   - GitHub, Google, Email 중 하나로 가입

2. **"Sites" 탭** 클릭
   - "Add new site" → "Deploy manually" 선택

3. **파일 업로드**
   - `index.html`, `styles.css`, `script.js`, `README.md` 
   - 4개 파일을 드래그 앤 드롭

4. **배포 완료!** (약 30초 소요)
   - 자동 생성된 URL 복사
   - 예: `https://moneybutler-abc123.netlify.app`

5. **커스텀 도메인 설정 (선택사항)**
   - Site settings → Domain management
   - 원하는 도메인 연결 가능

---

### **방법 2: Vercel (대안)**

1. **[Vercel.com](https://vercel.com/)** 가입
2. "New Project" → "Upload" 선택
3. 파일 업로드 후 자동 배포
4. 생성된 URL 복사

---

### **방법 3: GitHub Pages (무료)**

1. GitHub에 새 repository 생성
2. 파일 4개 업로드
3. Settings → Pages → Source: main branch
4. 배포 완료 (`https://username.github.io/repo-name`)

---

## 📧 Google Forms 이메일 수집 연동

### Step 1: Google Forms 만들기

1. **[forms.google.com](https://forms.google.com/)** 접속
2. "새 양식" 클릭
3. 질문 추가:
   - **이름** (단답형)
   - **이메일** (이메일 형식)
   - **가장 관심 있는 기능은?** (객관식)
     - AI 자산관리사
     - 게임화된 습관 형성
     - 현금 리워드
     - 투자 연계

### Step 2: Form Response URL 얻기

1. Google Forms 우측 상단 **"전송"** 클릭
2. **링크** 탭 선택 → URL 복사
3. URL에서 `viewform`을 `formResponse`로 변경
   ```
   변경 전: https://docs.google.com/forms/d/e/ABC123/viewform
   변경 후: https://docs.google.com/forms/d/e/ABC123/formResponse
   ```

### Step 3: Entry ID 찾기

1. Google Forms에서 **F12** (개발자 도구 열기)
2. **Network** 탭 열기
3. 폼에 테스트 데이터 입력 후 제출
4. Network 탭에서 `formResponse` 요청 찾기
5. Request Payload에서 entry ID 확인
   ```
   entry.1234567890=홍길동
   entry.0987654321=test@example.com
   entry.1122334455=ai
   ```

### Step 4: script.js 수정

`script.js` 파일의 51-60번째 줄 주석 해제 및 수정:

```javascript
const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
const formBody = new URLSearchParams({
    'entry.1234567890': formData.name,      // 실제 entry ID로 변경
    'entry.0987654321': formData.email,     // 실제 entry ID로 변경
    'entry.1122334455': formData.interest   // 실제 entry ID로 변경
});

fetch(googleFormUrl, {
    method: 'POST',
    body: formBody,
    mode: 'no-cors'  // CORS 우회
});
```

### Step 5: 테스트

1. 배포된 랜딩페이지에서 폼 제출
2. Google Forms 응답 확인
3. 정상 작동하면 완료! ✅

---

## 🎯 주요 기능

### 1️⃣ **FOMO 극대화 요소**
- ✅ 선착순 100명 한정 (긴급성)
- ✅ 동적 신청자 수 증가 시뮬레이션
- ✅ 리워드 & 혜택 강조 (₩125,000 상당)

### 2️⃣ **고전환율 설계**
- ✅ 명확한 가치 제안 (PB를 월 4,950원에)
- ✅ 문제-솔루션 구조
- ✅ 소셜 프루프 (베타 테스터 후기)
- ✅ 경쟁사 비교표
- ✅ 큰 CTA 버튼 (펄스 애니메이션)
- ✅ Sticky CTA (스크롤 시 하단 고정)

### 3️⃣ **기술적 완성도**
- ✅ 완벽한 반응형 (모바일 최적화)
- ✅ 부드러운 스크롤 애니메이션
- ✅ FAQ 아코디언
- ✅ 중복 신청 방지 (로컬 스토리지)
- ✅ SEO 최적화 (메타 태그)
- ✅ 빠른 로딩 속도

### 4️⃣ **사용자 경험**
- ✅ 30초 안에 신청 완료
- ✅ 성공 메시지 & 공유 기능
- ✅ 진행 상황 실시간 업데이트

---

## 🎨 커스터마이징 가이드

### 색상 변경

`styles.css` 파일 7-15번째 줄:

```css
:root {
    --navy-dark: #1A2332;    /* 진한 네이비 → 원하는 색 */
    --gold: #D4AF37;         /* 골드 → 원하는 강조 색 */
    --white: #FFFFFF;        /* 배경색 */
}
```

### 신청자 수 초기값 변경

`script.js` 파일 6번째 줄:

```javascript
let signupCount = 27;  // 원하는 초기값으로 변경
const maxSignups = 100; // 선착순 인원 변경
```

### 출시 예정일 변경

`index.html` 파일에서 "2026년 3월" 텍스트 검색 후 일괄 변경

### 리워드 금액 변경

`index.html` 파일에서 "5,000원" 텍스트 검색 후 변경

---

## 📱 테스트 방법

### 1️⃣ 데스크톱 테스트

1. 브라우저에서 `index.html` 파일 열기
2. 모든 섹션 스크롤하며 확인
3. CTA 버튼 클릭 → 폼 작동 확인
4. FAQ 클릭 → 아코디언 작동 확인

### 2️⃣ 모바일 테스트

**Chrome 개발자 도구 사용:**
```
1. F12 → 개발자 도구 열기
2. Ctrl + Shift + M → 디바이스 툴바
3. iPhone SE, Galaxy S8 등 선택
4. 화면 크기별로 테스트
```

**실제 스마트폰 테스트:**
```
1. 파일을 Netlify에 배포
2. 생성된 URL을 스마트폰에서 접속
3. 실제 사용 시나리오대로 테스트
```

---

## 🎯 SNS 홍보 콘텐츠

### 인스타그램 캡션

```
💰 재테크, 이제 게임처럼 재미있게!

부자들만 누리던 PB(개인 자산관리사)를
이제 월 4,950원에 손 안에서 😎

🎁 얼리버드 혜택 (선착순 100명)
✅ 평생 50% 할인
✅ 즉시 5,000원 리워드
✅ 프리미엄 3개월 무료

지금 신청 안 하면 12만원 손해!
프로필 링크 클릭 ☝️

#재테크 #자산관리 #AI앱 #부자되는법 #돈관리
#20대재테크 #30대재테크 #MoneyButler
```

### 네이버 카페 게시글

```
제목: [무료] AI가 돈 관리해주는 앱 출시 예정 (사전신청 받아요!)

안녕하세요!

재테크에 관심 많지만 실행력 부족하신 분들 계시죠?
저처럼요 ㅋㅋㅋ

그래서 게임처럼 재미있게 돈 관리할 수 있는 앱을 준비 중입니다.

💡 특징
- AI가 자동으로 절약 포인트 찾아줌
- 절약할 때마다 현금 리워드 지급
- 연속 기록, 배지, 레벨업 (게임처럼!)
- 부자들의 PB 서비스를 월 4,950원에

🎁 지금 사전신청하면
- 평생 50% 할인 (월 4,950원)
- 즉시 5,000원 리워드
- 프리미엄 3개월 무료

👉 신청 링크: [배포된 Netlify URL]

2026년 3월 정식 출시 예정이고, 선착순 100명만 혜택 드려요!
```

### 카카오톡 오픈채팅방

```
🎉 재테크 앱 사전 신청 받습니다!

AI가 자동으로 돈 관리해주고
게임처럼 재미있게 재테크할 수 있는 앱이에요.

얼리버드 혜택 (선착순 100명):
- 평생 50% 할인
- 5,000원 리워드
- 프리미엄 3개월 무료

링크: [배포된 URL]

관심 있으신 분들 신청해보세요! 😊
```

---

## ✅ 체크리스트

### 오늘 할 일 (2시간)

- [ ] Netlify에 배포 완료
- [ ] 생성된 URL 복사
- [ ] 본인 스마트폰에서 테스트
- [ ] 인스타그램 프로필에 링크 추가
- [ ] 네이버 카페 3곳에 게시글 작성
- [ ] 오픈카톡방 2곳에 홍보

### 이번 주 목표

- [ ] 사전 신청 30명 달성
- [ ] Google Forms 연동 완료
- [ ] 지인 10명에게 1:1 공유
- [ ] 피드백 수집 시작

### 2주 목표

- [ ] 사전 신청 100명 (얼리버드 마감)
- [ ] 인플루언서 협업 1명
- [ ] 유튜브 숏츠 제작 (앱 소개)
- [ ] 베타 커뮤니티 Notion 페이지 오픈

---

## 📊 현재 상태

- **파일 생성**: ✅ 완료
  - `index.html` (26,416자)
  - `styles.css` (21,557자)
  - `script.js` (8,817자)
  - `README.md` (현재 파일)

- **디자인 컨셉**: 진한 네이비 + 화이트 + 골드
- **출시 예정**: 2026년 3월
- **리워드**: 5,000원 (선착순 100명)
- **총 혜택**: 약 ₩125,000 상당
- **수익 환원**: 정식 출시 후 투명하게 공개 예정

---

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Variables (색상 관리)
  - Grid & Flexbox (레이아웃)
  - 애니메이션 (Keyframes, Transitions)
- **JavaScript (ES6+)**:
  - Intersection Observer (스크롤 애니메이션)
  - LocalStorage (중복 방지)
  - Fetch API (Google Forms 연동)
- **배포**: Netlify / Vercel / GitHub Pages

---

## 📞 문의

- **이메일**: contact@moneybutler.app
- **GitHub**: (추후 공개)
- **Instagram**: (준비 중)
- **YouTube**: (준비 중)

---

## 🎯 다음 단계

### A. 초기 사용자 확보 (0-2주)
1. 랜딩페이지 배포 ✅ (완료)
2. SNS 홍보 시작
3. 사전 신청 30명 달성

### B. MVP 개발 (2-8주)
1. 사용자 시나리오 작성
2. GenSpark로 MVP 코드 생성
3. Firebase 연동
4. 베타 테스터 30명 초대

### C. 피드백 & 개선 (8-12주)
1. 사용 데이터 분석
2. 피드백 기반 기능 개선
3. 리워드 시스템 베타 테스트

### D. 정식 출시 (2026년 3월)
1. 제휴사 확정
2. 결제 시스템 연동
3. 마케팅 캠페인 시작

---

## 💡 팁

### 전환율 높이는 법
1. **긴급성 강조**: "선착순 100명", "XX명 남음"
2. **손실 회피**: "놓치는 혜택 12만원"
3. **소셜 프루프**: 베타 테스터 후기 추가
4. **낮은 진입 장벽**: 30초 신청, 개인정보 최소화

### A/B 테스트 아이디어
- CTA 버튼 문구 변경
- 헤드라인 변경
- 리워드 금액 강조 위치
- 색상 변경 (골드 vs 다른 색)

---

## 🚀 지금 시작하세요!

1. **배포**: Netlify.com → 파일 업로드 → URL 복사
2. **홍보**: SNS에 공유 시작
3. **수집**: Google Forms 연동
4. **분석**: 신청자 수 & 피드백 확인

**성공을 응원합니다! 🎉**

---

**Copyright © 2025 MoneyButler. All rights reserved.**
