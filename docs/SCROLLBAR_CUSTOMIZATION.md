# 스크롤바 커스터마이징 구현 가이드

## 개요

포트폴리오 사이트의 스크롤바를 테마 색상에 맞춰 동적으로 커스터마이징한 구현 방법을 정리한 문서입니다.

## 구현 방법

### 1. CSS 기반 스크롤바 스타일 (globals.css)

기본 스크롤바 스타일을 `app/globals.css` 파일에 추가했습니다.

```css
/* 커스텀 스크롤바 디자인 */
/* Webkit 브라우저 (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}

::-webkit-scrollbar-track {
  background: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: var(--theme-color, #3B82F6) !important;
  border-radius: 10px !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
  transition: background 0.3s ease, opacity 0.3s ease !important;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--theme-color, #3B82F6) !important;
  opacity: 0.8 !important;
  background-clip: padding-box !important;
}

/* Firefox */
html {
  scrollbar-width: thin !important;
  scrollbar-color: var(--theme-color, #3B82F6) transparent !important;
}

body {
  scrollbar-width: thin !important;
  scrollbar-color: var(--theme-color, #3B82F6) transparent !important;
}
```

**특징:**
- `var(--theme-color)` CSS 변수를 사용하여 테마 색상 적용
- `!important` 플래그로 다른 스타일 덮어쓰기 방지
- Webkit과 Firefox 모두 지원

### 2. 초기 로드 시 스크롤바 적용 (layout.tsx)

페이지 최초 로드 시 스크롤바 스타일을 JavaScript로 동적으로 주입합니다.

```javascript
// layout.tsx의 head 스크립트 내부
const style = document.createElement('style');
style.textContent = `
  ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
  }
  ::-webkit-scrollbar-track {
    background: transparent !important;
  }
  ::-webkit-scrollbar-thumb {
    background: ${color} !important;
    border-radius: 10px !important;
    border: 2px solid transparent !important;
    background-clip: padding-box !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${color} !important;
    opacity: 0.8 !important;
  }
  html {
    scrollbar-width: thin !important;
    scrollbar-color: ${color} transparent !important;
  }
  body {
    scrollbar-width: thin !important;
    scrollbar-color: ${color} transparent !important;
  }
`;
document.head.appendChild(style);
```

**이유:**
- CSS 변수가 초기 로드 시 제대로 적용되지 않는 경우를 대비
- 테마 색상을 JavaScript로 직접 읽어서 스타일 주입

### 3. 동적 테마 변경 시 스크롤바 업데이트 (color-theme-provider.tsx)

사용자가 색상 테마를 변경할 때 스크롤바도 함께 업데이트되도록 구현했습니다.

```typescript
function applyScrollbarStyle(color: string) {
  if (typeof window === "undefined") return;
  
  // 기존 스크롤바 스타일 제거
  const existingStyle = document.getElementById('custom-scrollbar-style');
  if (existingStyle) {
    existingStyle.remove();
  }
  
  // 새로운 스크롤바 스타일 추가
  const style = document.createElement('style');
  style.id = 'custom-scrollbar-style';
  style.textContent = `
    ::-webkit-scrollbar-thumb {
      background: ${color} !important;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${color} !important;
      opacity: 0.8 !important;
    }
    html {
      scrollbar-color: ${color} transparent !important;
    }
    body {
      scrollbar-color: ${color} transparent !important;
    }
  `;
  document.head.appendChild(style);
}

function applyColorTheme(theme: ColorTheme) {
  // ... 기존 테마 적용 로직 ...
  
  // 스크롤바 스타일도 업데이트
  applyScrollbarStyle(color);
}
```

**작동 방식:**
1. 색상 테마 변경 시 `applyColorTheme` 함수 호출
2. `applyScrollbarStyle` 함수로 기존 스크롤바 스타일 제거 후 새 스타일 추가
3. `id="custom-scrollbar-style"`로 스타일 태그를 식별하여 중복 방지

## 브라우저 호환성

### Webkit 기반 브라우저 (Chrome, Safari, Edge)
- `::-webkit-scrollbar` 의사 요소 사용
- 완전한 커스터마이징 가능

### Firefox
- `scrollbar-width` 및 `scrollbar-color` 속성 사용
- 제한적인 커스터마이징 (색상만 변경 가능)

## 테마 색상

현재 지원하는 테마 색상:
- **Spring**: `#f94570` (핑크)
- **Summer**: `#09e022` (초록)
- **Autumn**: `#EA580C` (주황)
- **Winter**: `#3B82F6` (파랑) - 기본값

## 주요 특징

1. **동적 업데이트**: 테마 변경 시 스크롤바 색상도 즉시 변경
2. **호버 효과**: 마우스 오버 시 투명도 조정 (opacity: 0.8)
3. **부드러운 전환**: `transition` 속성으로 색상 변경 애니메이션
4. **반응형**: 세로/가로 스크롤 모두 지원

## 문제 해결

### 스크롤바가 변경되지 않는 경우

1. **하드 리프레시**: `Ctrl+Shift+R` (Windows) 또는 `Cmd+Shift+R` (Mac)
2. **브라우저 캐시 삭제**: 개발자 도구에서 캐시 비활성화
3. **CSS 우선순위 확인**: `!important` 플래그가 제대로 적용되었는지 확인

### Firefox에서 스크롤바가 보이지 않는 경우

Firefox는 `scrollbar-width: thin`으로만 제어 가능하며, 완전한 커스터마이징은 지원하지 않습니다. 기본적으로는 색상만 변경됩니다.

## 참고 자료

- [MDN: scrollbar-width](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)
- [MDN: scrollbar-color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)
- [Webkit Scrollbar Styling](https://webkit.org/blog/363/styling-scrollbars/)
