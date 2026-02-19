# 테마 토글 이슈 해결 상세 설명

이 문서는 다크/라이트 토글이 눌려도 색상이 변하지 않던 문제의 원인과 해결 과정을 정리한 것입니다.

## 1) 증상
- 토글 버튼을 눌러도 실제 UI 색상이 변하지 않음
- DevTools에서 `html` 태그에 `class="dark"` / `class="light"`가 정상적으로 토글되는 것은 확인됨
- 그런데도 `dark:` 스타일이 적용되지 않아 화면은 그대로인 상태

## 2) 원인 분석
### A. `next-themes` 설정 문제
- 기존 설정에서 `defaultTheme="light"`, `enableSystem={false}`로 고정되어 있었음
- 이 상태에서는 OS 테마를 따라가지 않고 항상 라이트로 시작됨
- 토글 자체는 작동하지만 OS 설정과의 연동이 끊어져 있었음

### B. Tailwind v4의 `dark:` 동작 방식
- Tailwind v4 기본 `dark:`는 `prefers-color-scheme`(OS 설정) 기반으로 동작
- 우리가 의도한 것은 **클래스 기반**(`html`에 `.dark` 붙는 방식) 동작
- 그래서 `html` 클래스가 바뀌어도 CSS가 반응하지 않았음

### C. `@custom-variant` 선언 위치 문제
- Tailwind v4에서 커스텀 변형(`@custom-variant`)은
  `@import "tailwindcss"` **보다 위에 선언해야 적용됨**
- 선언 위치가 아래에 있으면 `dark:` 변형이 만들어지지 않음

## 3) 실제 적용한 해결 방법

### 1) `next-themes` 설정 개선
`app/layout.tsx`에서 OS 테마와 연동되도록 변경

- 변경 전
  - `defaultTheme="light"`
  - `enableSystem={false}`

- 변경 후
  - `defaultTheme="system"`
  - `enableSystem`

결과: 처음 렌더링 때 OS 설정을 따라가고, 토글도 정상 작동

### 2) `HeroSection` 토글 로직 정리
`resolvedTheme`를 사용해 실제 테마 상태 기준으로 토글되게 변경

- 변경 전: `theme`만 사용
- 변경 후: `resolvedTheme || theme` 사용

또한 수동으로 `document.documentElement`에 클래스 붙이던 `useEffect`를 삭제
- `next-themes`가 자동으로 처리하므로 중복/충돌 제거

### 3) Tailwind v4 클래스 기반 `dark` 활성화
`app/globals.css`에서 아래 선언 추가

```
@custom-variant dark (&:where(.dark, .dark *));
```

중요 포인트: 이 선언이 `@import "tailwindcss"` **위에 있어야 함**

결과: `html.dark`일 때 `dark:` 클래스가 정상 적용됨

## 4) 변경된 파일 요약
- `app/layout.tsx`
  - `ThemeProvider` 설정 수정 (`system` 테마 사용)

- `components/hero-section.tsx`
  - `resolvedTheme` 사용
  - 수동 HTML 클래스 조작 `useEffect` 제거

- `app/globals.css`
  - `@custom-variant dark` 선언 위치 수정

## 5) 확인 방법
1. `pnpm dev`로 실행
2. 토글 버튼 클릭 시 즉시 UI 색상 변경 확인
3. OS 테마 변경 시 처음 로딩에서 반영 확인

## 6) 추가 팁
- Tailwind v4에서 클래스 기반 다크 모드를 쓰려면 반드시 `@custom-variant dark` 선언 필요
- 선언 위치가 매우 중요하며, `@import "tailwindcss"` 위에 있어야 함

---
문서 작성 기준: 2026-02-19
