# 김준수 포트폴리오

Next.js · TypeScript 기반 프론트엔드 개발자 포트폴리오 웹사이트

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Icons**: Lucide React
- **Theme**: next-themes (다크모드 지원)

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
pnpm build
```

### 프로덕션 실행

```bash
pnpm start
```

## 프로젝트 구조

```
port4lio/
├── app/
│   ├── layout.tsx      # 루트 레이아웃 (폰트, 테마 설정)
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── hero-section.tsx           # Hero 섹션
│   ├── about-section.tsx          # About Me 섹션
│   ├── experience-section.tsx     # Experience 섹션
│   ├── projects-section.tsx       # Projects 섹션
│   ├── skills-section.tsx         # Skills 섹션
│   ├── education-section.tsx      # Education & Certifications 섹션
│   ├── scroll-to-top.tsx          # 스크롤 투 탑 버튼
│   └── theme-provider.tsx         # 테마 프로바이더
└── public/
    └── images/                    # 이미지 파일
```

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 다크모드 지원
- ✅ 스크롤 투 탑 버튼
- ✅ 부드러운 스크롤 애니메이션
- ✅ SEO 최적화

## 커스터마이징

### 색상 변경

`app/globals.css`에서 액센트 컬러를 변경할 수 있습니다:

```css
--color-accent: #ea580c;
```

### 콘텐츠 수정

각 섹션 컴포넌트 파일에서 콘텐츠를 직접 수정할 수 있습니다.

## 라이선스

MIT
