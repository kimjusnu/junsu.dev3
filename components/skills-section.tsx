"use client";

import { Database, Palette, Server, TrendingUp, Code, Wrench, Terminal, Sparkles } from "lucide-react";
import { HiOutlineCommandLine } from "react-icons/hi2";
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
    "Jinja2": "/Jinja (1).svg",
    "Figma": "/Figma.svg",
    "Tailwind CSS": "/Tailwind CSS.svg",
    "TailwindCSS": "/Tailwind CSS.svg",
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

export function SkillsSection() {
  const skills = [
    {
      icon: Code,
      label: "Frontend",
      items: "Next.js, React, TypeScript, JavaScript",
    },
    {
      icon: Database,
      label: "State/Data",
      items: "Zustand, TanStack Query, Redux, Axios, Firebase, jQuery",
    },
    {
      icon: Palette,
      label: "UI",
      items: "TailwindCSS, MUI, CSS",
    },
    {
      icon: Terminal,
      label: "Backend",
      items: "FastAPI, Jinja2",
    },
    {
      icon: Server,
      label: "DevOps",
      items: "GitHub Actions, Vercel, AWS (EC2, S3), Jenkins, NGINX, PM2",
    },
    {
      icon: TrendingUp,
      label: "Analytics",
      items: "GA4, Mixpanel",
    },
    {
      icon: Wrench,
      label: "Tools",
      items: "Git, Figma, Notion, Slack, Discord, Jira",
    },
    {
      icon: Sparkles,
      label: "AI Tools",
      items: "Cursor, Antigravity, Pencil, Figurelabs, OpenClo, v0, ...",
    },
  ];

  return (
    <section id="skills" className="bg-linear-to-b from-white to-[#FAFBFC] px-8 py-20 dark:from-[#0F0F0F] dark:to-[#18181B] md:px-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-10 flex items-center gap-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          data-aos="fade-up"
        >
          <HiOutlineCommandLine className="h-8 w-8" style={{ color: "var(--theme-color)" }} />
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const animations = ["zoom-in", "fade-up", "fade-right", "fade-left", "zoom-in", "fade-up", "fade-right", "zoom-in"];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-zinc-200 bg-white p-8 shadow-md transition-all dark:border-zinc-800 dark:bg-zinc-900"
                onMouseEnter={(e) => {
                  const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                  e.currentTarget.style.borderColor = `${color}4D`;
                  e.currentTarget.style.boxShadow = `0 20px 25px -5px ${color}1A, 0 10px 10px -5px ${color}0A`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
                data-aos={animations[index]}
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div 
                  className="absolute inset-0 bg-linear-to-br transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to bottom right, var(--theme-color)00, var(--theme-color)00, var(--theme-color)00)`,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                    e.currentTarget.style.background = `linear-gradient(to bottom right, ${color}0D, ${color}08, ${color}00)`;
                  }}
                />
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-5 w-5" style={{ color: "var(--theme-color)" }} />
                    <h3 className="text-base font-bold uppercase tracking-wider" style={{ color: "var(--theme-color)" }}>
                      {skill.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.split(", ").map((item, idx) => {
                      const iconPath = getTechIcon(item.trim());
                      return (
                        <span
                          key={idx}
                          className="flex items-center gap-0.5 rounded-full border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {iconPath && (
                            <Image
                              src={iconPath}
                              alt={item}
                              width={10}
                              height={10}
                              className="shrink-0"
                            />
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
