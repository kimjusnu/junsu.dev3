"use client";

import { HiOutlineAcademicCap } from "react-icons/hi2";

export function EducationSection() {
  return (
    <section id="education" className="bg-linear-to-b from-white to-[#FAFBFC] px-10 py-20 dark:from-[#0F0F0F] dark:to-[#18181B] md:px-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-10 flex items-center gap-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          data-aos="fade-up"
        >
          <HiOutlineAcademicCap className="h-8 w-8" style={{ color: "var(--theme-color)" }} />
          Education & Certifications
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="100">
            {/* Education */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Education
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex flex-col gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>한국공학대학교 컴퓨터공학부 소프트웨어전공 (2020 ~ 2026)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <a
                      href="https://expo.tukorea.ac.kr/2025/work/87"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:underline"
                      style={{ "--hover-color": "var(--theme-color)" } as React.CSSProperties & { "--hover-color": string }}
                      onMouseEnter={(e) => {
                        const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                        e.currentTarget.style.color = color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "";
                      }}
                    >
                      <span>2025 한국공학대전 우수작품 수상</span>
                      <span style={{ color: "var(--theme-color)" }}>→</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Training */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Training
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex flex-col gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>스나이퍼팩토리 프론트엔드 3기 (2024.10 ~ 2024.12) · 수료</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>팀장으로 팀을 리딩하며 우수상 수상 (12팀 중 2등)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <a
                      href="https://www.wairi.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:underline"
                      style={{ "--hover-color": "var(--theme-color)" } as React.CSSProperties & { "--hover-color": string }}
                      onMouseEnter={(e) => {
                        const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                        e.currentTarget.style.color = color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "";
                      }}
                    >
                      <span>와이리 홈페이지 Vue.js → Next.js 마이그레이션</span>
                      <span style={{ color: "var(--theme-color)" }}>→</span>
                    </a>
                  </div>
                </li>
                <li className="flex flex-col gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>웅진씽크빅 × Udemy Next.js 부트캠프 (2024.07 ~ 2024.09) · 수료</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>우수상 수상 (16팀 중 2등)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <a
                      href="https://componique.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:underline"
                      style={{ "--hover-color": "var(--theme-color)" } as React.CSSProperties & { "--hover-color": string }}
                      onMouseEnter={(e) => {
                        const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                        e.currentTarget.style.color = color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "";
                      }}
                    >
                      <span>UI 라이브러리 프로젝트 Componique</span>
                      <span style={{ color: "var(--theme-color)" }}>→</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
            {/* Certifications */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Certifications
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span style={{ color: "var(--theme-color)" }}>•</span>
                  <span>Google Analytics 4 (GA4) Certified (2025.09.19)</span>
                </li>
                <li className="flex items-center gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span style={{ color: "var(--theme-color)" }}>•</span>
                  <span>OPIc IM1 (2025.02.19)</span>
                </li>
              </ul>
            </div>

            {/* Other Experiences */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Other Experiences
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>와이즈만 영재학원 물리 강사 (2025.01 ~ 현재)</span>
                </li>
                <li className="flex items-center gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <span style={{ color: "var(--theme-color)" }}>•</span>
                  <a
                    href="https://www.instagram.com/tuk_dream_on/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:underline"
                    style={{ "--hover-color": "var(--theme-color)" } as React.CSSProperties & { "--hover-color": string }}
                    onMouseEnter={(e) => {
                      const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                      e.currentTarget.style.color = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <span>한국공학대학교 현장실습 서포터즈 (1·2·3기) (2022.12 ~ 2025.02)</span>
                    <span style={{ color: "var(--theme-color)" }}>→</span>
                  </a>
                </li>
                <li className="flex flex-col gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>대한민국 육군 병장 만기전역 (53사단) (2021.06 ~ 2022.12)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>부산 호국훈련 (2021.10.25 ~ 2021.11.05) · 전략기획 PPT 제작</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>UFS (Ulchi Freedom Shield) (2021.08) · 위성운용병(군통신망 개통 및 운영) · 정보분석조(지하철역 인질 테러 대응 훈련)</span>
                  </div>
                </li>
                <li className="flex flex-col gap-2 text-base text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <a
                      href="https://cafe.naver.com/splingles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:underline"
                      style={{ "--hover-color": "var(--theme-color)" } as React.CSSProperties & { "--hover-color": string }}
                      onMouseEnter={(e) => {
                        const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                        e.currentTarget.style.color = color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "";
                      }}
                    >
                      <span>대학생 발표연합동아리 SPLing</span>
                      <span style={{ color: "var(--theme-color)" }}>→</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>42기 운영진 (2020.10 ~ 2021.04)</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span style={{ color: "var(--theme-color)" }}>•</span>
                    <span>40기 기수 (2020.03 ~ 2020.09)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
