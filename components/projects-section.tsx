"use client";

import { HiOutlineFolder } from "react-icons/hi2";
import { X, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// 기술 스택 이름을 아이콘 경로로 매핑
const getTechIcon = (techName: string): string | null => {
  const iconMap: Record<string, string> = {
    "Next.js": "/Next.js.svg",
    "TypeScript": "/TypeScript.svg",
    "GitHub Actions": "/GitHub Actions.svg",
    "Node.js": "/Node.js.svg",
    "JavaScript": "/JavaScript.svg",
    "React": "/React.svg",
    "Redux": "/Redux.svg",
    "Zustand": "/Zustand.svg",
    "Vercel": "/Vercel.svg",
    "NPM": "/NPM.svg",
    "Git": "/Git.svg",
    "GitHub": "/GitHub.svg",
    "Firebase": "/Firebase.svg",
    "AWS": "/AWS.svg",
    "FastAPI": "/FastAPI.svg",
    "Jinja": "/Jinja (1).svg",
    "Figma": "/Figma.svg",
    "Tailwind CSS": "/Tailwind CSS.svg",
    "TanStack Query": "/reactquery.svg",
    "Axios": "/Azios.svg",
    "jQuery": "/jQuery.svg",
    "MUI": "/Material UI.svg",
    "Material UI": "/Material UI.svg",
    "Jenkins": "/Jenkins.svg",
    "NGINX": "/NGINX.svg",
    "PM2": "/pm2.svg",
    "GA4": "/google_analytics.webp",
    "Mixpanel": "/Mixpanel.png",
    "Slack": "/Slack.svg",
    "Notion": "/notion.png",
    "Discord": "/Discord.png",
    "Jira": "/Jira (1).svg",
    "Cursor": "/cursor.png",
    "Pencil": "/pencil.svg",
    "Antigravity": "/anti.webp",
    "Figurelabs": "/figurelabs.ico",
    "figurelabs": "/figurelabs.ico",
    "OpenClo": "/opencl.png",
    "opencl": "/opencl.png",
    "v0": "/v0.png",
  };

  // 정확한 매칭 시도
  if (iconMap[techName]) {
    return iconMap[techName];
  }

  // 부분 매칭 시도 (대소문자 무시)
  const normalizedTechName = techName.toLowerCase();
  for (const [key, value] of Object.entries(iconMap)) {
    const normalizedKey = key.toLowerCase();
    if (normalizedTechName.includes(normalizedKey) || normalizedKey.includes(normalizedTechName)) {
      return value;
    }
  }

  return null;
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Componique",
      subtitle: "오픈소스 UI 컴포넌트 라이브러리",
      description:
        "Next.js + Tailwind 기반 디자인 시스템 구축을 목표로 개발한 오픈소스 UI 라이브러리.\n30+ UI 컴포넌트 설계 및 20개 이상 핵심 컴포넌트 직접 구현",
      achievement: "npm 다운로드 최고 피크 20만+",
      tech: "Next.js, React, TypeScript, Zustand, NPM",
      image: "/Componique_Card.png",
      details: [
        "30개 이상의 재사용 가능한 UI 컴포넌트 설계 및 개발",
        "TypeScript로 타입 안정성 확보 및 개발자 경험 향상",
        "Rollup을 활용한 번들 최적화 및 트리 쉐이킹",
        "Storybook으로 컴포넌트 문서화 및 시각적 테스트",
        "npm을 통한 패키지 배포 및 버전 관리",
        "오픈소스 커뮤니티 기여 및 피드백 수집",
      ],
      links: [
        { type: "github", url: "https://github.com/kimjusnu/componique", label: "GitHub" },
        { type: "website", url: "https://componique.vercel.app", label: "Website" },
      ],
    },
    {
      title: "와이리(Wariri) 홈페이지",
      subtitle: "Vue.js -> Next.js 마이그레이션",
      description:
        "CSR 기반 Vue 사이트를 SSR 기반 Next.js 구조로 재구현.\nSSR 기반 구조 전환 및 SEO 메타 태그 재설계",
      achievement: "Lighthouse FCP 1.8s → 0.9s 개선, 검색 유입률 약 50% 증가",
      tech: "Next.js, TypeScript, Tailwind CSS",
      image: "/Wairi_Card.png",
      details: [
        "Vue.js CSR 구조를 Next.js SSR로 완전 마이그레이션",
        "서버 사이드 렌더링으로 초기 로딩 속도 개선",
        "동적 메타 태그 생성으로 SEO 최적화",
        "Lighthouse 성능 점수 90점 이상 달성",
        "검색 엔진 최적화로 유기적 트래픽 50% 증가",
        "반응형 디자인으로 모바일 사용자 경험 개선",
      ],
      links: [
        { type: "website", url: "https://www.wairi.co.kr", label: "Website" },
      ],
    },
    {
      title: "4094Fixer",
      subtitle: "Next.js 오류 자동 해결 CLI",
      description:
        "Next.js 개발 중 발생하는 4094 오류를 자동으로 해결하는 CLI 도구.\n캐시 삭제 → 의존성 재설치 → dev 서버 재시작까지 자동화",
      achievement: "Windows/macOS 크로스 플랫폼 대응, npm 배포 완료",
      tech: "JavaScript, Node.js, NPM, GitHub Actions",
      image: "/4094fixer_Card.webp",
      details: [
        "Next.js 4094 오류의 근본 원인 분석 및 해결 로직 구현",
        "캐시 삭제, 의존성 재설치, 서버 재시작을 자동화",
        "Windows와 macOS 모두에서 동작하는 크로스 플랫폼 CLI 개발",
        "npm 패키지로 배포하여 전 세계 개발자들이 사용 가능",
        "GitHub Actions를 통한 CI/CD 파이프라인 구축",
        "사용자 친화적인 에러 메시지 및 진행 상황 표시",
      ],
      links: [
        { type: "github", url: "https://github.com/kimjusnu/4094fixer", label: "GitHub" },
        { type: "npm", url: "https://www.npmjs.com/package/4094fixer", label: "npm" },
      ],
    },
  ];

  return (
    <section id="projects" className="bg-linear-to-b from-white to-[#FAFBFC] px-8 py-20 dark:from-[#0F0F0F] dark:to-[#18181B] md:px-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-10 flex items-center gap-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          data-aos="fade-up"
        >
          <HiOutlineFolder className="h-8 w-8" style={{ color: "var(--theme-color)" }} />
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const animations = ["zoom-in", "flip-left", "flip-right"];
            return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border-2 border-zinc-200 bg-white p-9 shadow-lg transition-all cursor-pointer dark:border-zinc-800 dark:bg-zinc-900"
              style={{
                "--hover-border": "var(--theme-color)",
                "--hover-shadow": "var(--theme-color)",
              } as React.CSSProperties & { "--hover-border": string; "--hover-shadow": string }}
              onMouseEnter={(e) => {
                const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                e.currentTarget.style.borderColor = `${color}4D`;
                e.currentTarget.style.boxShadow = `0 25px 50px -12px ${color}1A, 0 0 0 1px ${color}4D`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
              }}
              onClick={() => setSelectedProject(index)}
              data-aos={animations[index % animations.length]}
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {/* 배경 이미지 - 투명하고 흐릿하게 */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover blur-[1px] ${
                      project.title === "4094Fixer" ? "opacity-10" : "opacity-20"
                    }`}
                  />
                  <div className="absolute inset-0 bg-white/40 dark:bg-zinc-900/40" />
                </div>
              )}
              
              {/* 그라데이션 오버레이 */}
              <div 
                className="absolute inset-0 z-[1] bg-linear-to-br transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to bottom right, var(--theme-color)00, var(--theme-color)00, var(--theme-color)00)`,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                  e.currentTarget.style.background = `linear-gradient(to bottom right, ${color}0D, ${color}08, ${color}00)`;
                }}
              />
              <div className="relative z-10">
              <div className="mb-4 flex flex-col gap-2">
                <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  {project.subtitle}
                </p>
              </div>

              <p className="mb-6 whitespace-pre-line text-base font-semibold leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mb-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <p className="text-lg font-bold" style={{ color: "var(--theme-color)" }}>
                  {project.achievement}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((tech, idx) => {
                  const iconPath = getTechIcon(tech.trim());
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1 rounded-full border border-zinc-300 bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {iconPath && (
                        <Image
                          src={iconPath}
                          alt={tech}
                          width={12}
                          height={12}
                          className="shrink-0"
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
              </div>
              
              {/* 플로팅 액션 버튼 - 우측 하단 (호버 시 나타남) */}
              <div className="absolute bottom-4 right-4 z-20 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(index);
                  }}
                  className="group/btn relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/20 bg-white/90 px-5 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl active:scale-95 dark:border-white/10 dark:bg-black/20 dark:text-white dark:hover:bg-black/30"
                  style={{
                    color: "var(--theme-color)",
                  }}
                  style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05) inset",
                  }}
                  onMouseEnter={(e) => {
                    const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                    e.currentTarget.style.boxShadow = `0 8px 32px ${color}40, 0 0 0 1px ${color}30 inset, 0 0 20px ${color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05) inset";
                  }}
                  aria-label="View details"
                >
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, var(--theme-color)20, var(--theme-color)10)`,
                    }}
                  />
                  <svg
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                  <span className="relative z-10">상세보기</span>
                </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>

      {/* 상세 정보 모달 */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:bg-zinc-900 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100/80 text-zinc-600 backdrop-blur-sm transition-all hover:bg-zinc-200 hover:scale-110 dark:bg-zinc-800/80 dark:text-zinc-400 dark:hover:bg-zinc-700"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* 헤더 */}
              <div className="px-10 pt-10 pb-8">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--theme-color)" }}>
                  Project
                </div>
                <h3 className="mb-3 text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              {/* 주요 성과 - 상단 강조 */}
              {projects[selectedProject].achievement && (
                <div className="mx-10 mb-8 rounded-xl p-6" style={{ 
                  background: `linear-gradient(135deg, var(--theme-color)15, var(--theme-color)05)`
                }}>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Achievement
                  </div>
                  <p className="text-xl font-bold" style={{ color: "var(--theme-color)" }}>
                    {projects[selectedProject].achievement}
                  </p>
                </div>
              )}

              <div className="px-10 pb-10">
                {/* 프로젝트 개요 */}
                <div className="mb-10">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Overview
                  </div>
                  <p className="whitespace-pre-line text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* 상세 내용 */}
                <div className="mb-10">
                  <div className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Details
                  </div>
                  <div className="space-y-4">
                    {projects[selectedProject].details?.map((detail, idx) => (
                      <p key={idx} className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 사용 기술 */}
                <div className="mb-10">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.split(", ").map((tech, idx) => {
                      const iconPath = getTechIcon(tech.trim());
                      return (
                        <span
                          key={idx}
                          className="flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-all hover:scale-105 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {iconPath && (
                            <Image
                              src={iconPath}
                              alt={tech}
                              width={14}
                              height={14}
                              className="shrink-0"
                            />
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* 관련 링크 */}
                {projects[selectedProject].links && projects[selectedProject].links.length > 0 && (
                  <div>
                    <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Links
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].links?.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:scale-105 hover:shadow-md dark:bg-zinc-800 dark:text-zinc-300"
                          style={{
                            backgroundColor: "var(--theme-color)10",
                            color: "var(--theme-color)",
                          }}
                          onMouseEnter={(e) => {
                            const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                            e.currentTarget.style.backgroundColor = color;
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "";
                            e.currentTarget.style.color = "";
                          }}
                        >
                          {link.type === "github" ? (
                            <Github className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
