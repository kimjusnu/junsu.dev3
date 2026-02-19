"use client";

import * as React from "react";

type ColorTheme = "spring" | "summer" | "autumn" | "winter";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  themeColor: string;
}

const ColorThemeContext = React.createContext<ColorThemeContextType | undefined>(undefined);

const COLOR_THEMES: Record<ColorTheme, string> = {
  spring: "#f94570",
  summer: "#09e022",
  autumn: "#EA580C",
  winter: "#3B82F6",
};

const STORAGE_KEY = "portfolio-color-theme";

function getStoredColorTheme(): ColorTheme {
  if (typeof window === "undefined") return "winter";
  const stored = localStorage.getItem(STORAGE_KEY) as ColorTheme | null;
  return stored && Object.keys(COLOR_THEMES).includes(stored) ? stored : "winter";
}

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
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  const color = COLOR_THEMES[theme];
  root.style.setProperty("--theme-color", color);
  
  // Tailwind arbitrary values를 위한 클래스 추가
  root.className = root.className.replace(/theme-spring|theme-summer|theme-autumn|theme-winter/g, '');
  root.classList.add(`theme-${theme}`);
  
  root.setAttribute("data-color-theme", theme);
  
  // 스크롤바 스타일도 업데이트
  applyScrollbarStyle(color);
}

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = React.useState<ColorTheme>("winter");
  const [mounted, setMounted] = React.useState(false);

  // 초기 색상 테마 로드
  React.useEffect(() => {
    const stored = getStoredColorTheme();
    setColorThemeState(stored);
    applyColorTheme(stored);
    setMounted(true);
  }, []);

  // 색상 테마 변경 시 적용
  React.useEffect(() => {
    if (!mounted) return;
    applyColorTheme(colorTheme);
    localStorage.setItem(STORAGE_KEY, colorTheme);
  }, [colorTheme, mounted]);

  const setColorTheme = React.useCallback(
    (theme: ColorTheme) => {
      if (!mounted) return;
      setColorThemeState(theme);
    },
    [mounted]
  );

  const value = React.useMemo(
    () => ({
      colorTheme,
      setColorTheme,
      themeColor: COLOR_THEMES[colorTheme],
    }),
    [colorTheme, setColorTheme]
  );

  return <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>;
}

export function useColorTheme() {
  const context = React.useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
