"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { 
  HiOutlineUser, 
  HiOutlineBriefcase, 
  HiOutlineFolder, 
  HiOutlineCommandLine, 
  HiOutlineAcademicCap 
} from "react-icons/hi2";

const sections = [
  { id: "about", label: "About", icon: HiOutlineUser },
  { id: "experience", label: "Experience", icon: HiOutlineBriefcase },
  { id: "projects", label: "Projects", icon: HiOutlineFolder },
  { id: "skills", label: "Skills", icon: HiOutlineCommandLine },
  { id: "education", label: "Education", icon: HiOutlineAcademicCap },
];

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 스크롤 위치에 따라 표시 여부 결정
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setActiveSection("");
        return;
      }

      // 페이지 하단에 도달했을 때 마지막 섹션 활성화
      if (scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection("education");
        return;
      }

      // 현재 활성 섹션 찾기
      let current = "";
      const offset = 200; // 활성화 기준 오프셋
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 섹션이 뷰포트 상단 근처에 있으면 활성화
          if (rect.top <= offset) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // 헤더 높이 고려
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 md:bottom-8 md:right-8">
      {/* 섹션 네비게이션 */}
      <div className="flex flex-col gap-1.5 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-md p-1.5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 ${
                isActive
                  ? "text-white shadow-md"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
              style={isActive ? { backgroundColor: "var(--theme-color)", boxShadow: `0 4px 6px -1px var(--theme-color)4D` } : undefined}
              aria-label={`Go to ${section.label} section`}
              title={section.label}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>

      {/* 스크롤 투 탑 버튼 - 퀵메뉴와 같은 너비로 맞춤 */}
      <div className="w-[52px] flex items-center justify-center">
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
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
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
