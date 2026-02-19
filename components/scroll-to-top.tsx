"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all hover:shadow-xl md:bottom-8 md:right-8"
      style={{
        backgroundColor: "var(--theme-color)",
        boxShadow: `0 10px 15px -3px var(--theme-color)40, 0 4px 6px -2px var(--theme-color)40`,
      }}
      onMouseEnter={(e) => {
        const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
        e.currentTarget.style.backgroundColor = color === "#EA580C" ? "#DC2626" : color === "#f94570" ? "#e91e63" : color === "#09e022" ? "#07c91e" : "#2563EB";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
