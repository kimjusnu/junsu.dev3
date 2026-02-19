"use client";

import { Github, BookOpen, Mail, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useColorTheme } from "@/components/color-theme-provider";

export function HeroSection() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { colorTheme, setColorTheme, themeColor } = useColorTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleDots, setVisibleDots] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 점들을 랜덤하게 반짝거리게 하는 효과
  useEffect(() => {
    const dotCount = 16;
    const timers: NodeJS.Timeout[] = [];

    const scheduleDot = (index: number) => {
      const showDelay = Math.random() * 4000; // 0-4초 사이 랜덤 시작
      const showDuration = 800 + Math.random() * 1200; // 0.8-2초 표시
      const hideDuration = 2000 + Math.random() * 3000; // 2-5초 숨김

      const showTimer = setTimeout(() => {
        setVisibleDots((prev) => ({ ...prev, [index]: true }));
        
        const hideTimer = setTimeout(() => {
          setVisibleDots((prev) => ({ ...prev, [index]: false }));
          scheduleDot(index); // 다음 반짝임 예약
        }, showDuration);
        
        timers.push(hideTimer);
      }, showDelay);
      
      timers.push(showTimer);
    };

    // 각 점마다 초기 스케줄링
    for (let i = 0; i < dotCount; i++) {
      scheduleDot(i);
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    const currentTheme = resolvedTheme || theme || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white to-[#FAFBFC] px-8 py-32 dark:from-[#0F0F0F] dark:to-[#18181B]">
      {/* 배경 장식 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 그리드 패턴 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]" />
        
        {/* 마우스를 따라가는 원형 블러 효과 - 부드럽게 */}
        <div
          className="pointer-events-none absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.x / 100})`,
            transition: "left 0.6s cubic-bezier(0.4, 0, 0.2, 1), top 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="pointer-events-none absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/20 blur-3xl dark:bg-purple-500/10"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.y / 100})`,
            transition: "left 0.8s cubic-bezier(0.4, 0, 0.2, 1), top 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        
        {/* 반짝이는 점들 - 컬러 테마 색상 사용 */}
        {[
          { left: "10%", top: "15%", delay: "0s", size: 1, color: "spring" },
          { left: "25%", top: "30%", delay: "0.5s", size: 1.5, color: "summer" },
          { left: "15%", top: "50%", delay: "1s", size: 1, color: "autumn" },
          { left: "30%", top: "20%", delay: "1.5s", size: 1.5, color: "winter" },
          { left: "20%", top: "70%", delay: "0.3s", size: 1, color: "spring" },
          { left: "70%", top: "25%", delay: "0.8s", size: 1.5, color: "summer" },
          { left: "80%", top: "45%", delay: "1.2s", size: 1, color: "autumn" },
          { left: "75%", top: "65%", delay: "0.6s", size: 1.5, color: "winter" },
          { left: "85%", top: "80%", delay: "1.8s", size: 1, color: "spring" },
          { left: "50%", top: "10%", delay: "0.4s", size: 1.5, color: "summer" },
          { left: "45%", top: "85%", delay: "1.3s", size: 1, color: "autumn" },
          { left: "60%", top: "60%", delay: "0.9s", size: 1.5, color: "winter" },
          { left: "35%", top: "75%", delay: "1.6s", size: 1, color: "spring" },
          { left: "90%", top: "35%", delay: "0.7s", size: 1.5, color: "summer" },
          { left: "5%", top: "90%", delay: "1.1s", size: 1, color: "autumn" },
          { left: "55%", top: "40%", delay: "0.2s", size: 1.5, color: "winter" },
        ].map((dot, idx) => {
          const distance = Math.sqrt(
            Math.pow(parseFloat(dot.left) - mousePosition.x, 2) +
            Math.pow(parseFloat(dot.top) - mousePosition.y, 2)
          );
          const scale = distance < 20 ? 1.5 + (20 - distance) / 20 * 0.5 : 1;
          const opacity = distance < 25 ? 0.8 + (25 - distance) / 25 * 0.2 : 0.5;
          const glowSize = distance < 20 ? 4 + (20 - distance) / 20 * 2 : 2;
          
          const colorMap = {
            spring: "#f94570",
            summer: "#09e022",
            autumn: "#EA580C",
            winter: "#3B82F6",
          };
          
          const dotColor = colorMap[dot.color as keyof typeof colorMap];
          
          // RGB 추출 (글로우 효과용)
          const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
              ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
                }
              : { r: 147, g: 197, b: 253 };
          };
          
          const rgb = hexToRgb(dotColor);
          
          const isVisible = visibleDots[idx] ?? false;
          
          return (
            <div
              key={idx}
              className="pointer-events-none absolute transition-all duration-1000 ease-in-out"
              style={{
                left: dot.left,
                top: dot.top,
                transform: `translate(-50%, -50%) scale(${isVisible ? scale : 0})`,
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 ease-in-out"
                style={{
                  width: `${dot.size * 3}px`,
                  height: `${dot.size * 3}px`,
                  backgroundColor: dotColor,
                  opacity: isVisible ? (opacity * 0.6) : 0,
                  boxShadow: isVisible ? `0 0 ${glowSize}px ${glowSize}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.3})` : "none",
                }}
              />
            </div>
          );
        })}
      </div>
      
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8">
        {/* Name */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50 md:text-7xl" style={{ fontFamily: "'OmuDaye', sans-serif" }}>
            김준수
          </h1>
          <p className="text-lg font-normal tracking-wide text-zinc-400 dark:text-zinc-500 md:text-xl" style={{ fontFamily: "'OmuDaye', sans-serif" }}>
            Junsu Kim
          </p>
        </div>

        {/* Role */}
        <p className="text-center text-xl font-medium text-zinc-500 dark:text-zinc-400 md:text-2xl" style={{ fontFamily: "'OmuDaye', sans-serif" }}>
          Frontend Developer
        </p>

        {/* Intro */}
        <p className="max-w-2xl text-center text-lg leading-relaxed text-zinc-900 dark:text-zinc-50 md:text-xl" style={{ fontFamily: "'OmuDaye', sans-serif" }}>
          엑셀레이터부터 B2B/B2C까지, 다양한 비즈니스 요구를 반영하여 제품을
          완성해왔습니다
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <a
            href="https://github.com/kimjusnu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 sm:w-auto"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://dietisdie.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 sm:w-auto"
          >
            <BookOpen className="h-5 w-5" />
            Blog
          </a>
          <a
            href="mailto:junsu4621@naver.com"
            className="flex w-full items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl sm:w-auto"
            style={{
              backgroundColor: themeColor,
              boxShadow: `${themeColor}25`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colorTheme === "spring" ? "#e91e63" : colorTheme === "summer" ? "#07c91e" : colorTheme === "autumn" ? "#DC2626" : "#2563EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = themeColor;
            }}
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-2">
          {/* Theme Toggle and Color Theme Buttons */}
          <div className="mb-4 flex items-center gap-3">
            {/* Color Theme Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setColorTheme("spring")}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  colorTheme === "spring"
                    ? "border-zinc-900 dark:border-zinc-50 scale-110"
                    : "border-zinc-300 dark:border-zinc-700 hover:scale-105"
                }`}
                style={{ backgroundColor: "#f94570" }}
                aria-label="Spring theme"
                title="봄"
              />
              <button
                onClick={() => setColorTheme("summer")}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  colorTheme === "summer"
                    ? "border-zinc-900 dark:border-zinc-50 scale-110"
                    : "border-zinc-300 dark:border-zinc-700 hover:scale-105"
                }`}
                style={{ backgroundColor: "#09e022" }}
                aria-label="Summer theme"
                title="여름"
              />
              <button
                onClick={() => setColorTheme("autumn")}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  colorTheme === "autumn"
                    ? "border-zinc-900 dark:border-zinc-50 scale-110"
                    : "border-zinc-300 dark:border-zinc-700 hover:scale-105"
                }`}
                style={{ backgroundColor: "#EA580C" }}
                aria-label="Autumn theme"
                title="가을"
              />
              <button
                onClick={() => setColorTheme("winter")}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  colorTheme === "winter"
                    ? "border-zinc-900 dark:border-zinc-50 scale-110"
                    : "border-zinc-300 dark:border-zinc-700 hover:scale-105"
                }`}
                style={{ backgroundColor: "#3B82F6" }}
                aria-label="Winter theme"
                title="겨울"
              />
            </div>
            
            <button
              onClick={toggleTheme}
              disabled={!mounted}
              className="flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-2.5 transition-colors hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {mounted ? (
                (resolvedTheme || theme) === "dark" ? (
                  <Sun className="h-4 w-4 text-zinc-100" />
                ) : (
                  <Moon className="h-4 w-4 text-zinc-900" />
                )
              ) : (
                <Moon className="h-4 w-4 text-zinc-900" />
              )}
            </button>
          </div>
          <ChevronDown className="h-5 w-5" style={{ color: themeColor }} />
          <div className="h-8 w-0.5 rounded-full" style={{ backgroundColor: themeColor }} />
        </div>
      </div>
    </section>
  );
}
