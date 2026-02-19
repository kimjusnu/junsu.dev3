"use client";

import { Check } from "lucide-react";
import { HiOutlineUser } from "react-icons/hi2";

export function AboutSection() {
  return (
    <section id="about" className="bg-linear-to-b from-white to-[#FAFBFC] px-10 py-20 dark:from-[#0F0F0F] dark:to-[#18181B] md:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-between gap-4" data-aos="fade-up">
          <h2 className="flex items-center gap-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            <HiOutlineUser className="h-8 w-8" style={{ color: "var(--theme-color)" }} />
            About Me
          </h2>
          <p className="hidden text-xs text-zinc-400 dark:text-zinc-500 md:block">
            github.com/kimjusnu | dietisdie.tistory.com | junsu4621@naver.com
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* 간단소개 */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              간단소개
            </h3>
            <div className="flex flex-col gap-3 text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
              <p>
                컴퓨터공학을 전공하며 백엔드 중심으로 개발을 시작했지만, 구현 단계에서{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  사용자 경험을 완성해가는 과정
                </span>
                에 집중하게 되었고, 현재는 프론트엔드를 주력으로 개발하며{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  백엔드 및 AI 영역까지 협업하며 서비스 전반을 이해하는 개발
                </span>
                을 수행하고 있습니다.
              </p>
              <div className="h-4" />
              <p>
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  Next.js · TypeScript · React
                </span>
                {" "}기반으로 서비스를 설계·구현해왔습니다.
              </p>
              <p>
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  엑셀레이터 기업
                </span>
                에서 고객의 요구사항을 빠르게 제품화하는 경험을 쌓았습니다. 이후{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  B2B/B2C 환경
                </span>
                에서는 특정 산업 도메인을 학습하며{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  시니어 유저층을 고려한 서비스
                </span>
                를 개발했습니다. 이러한 과정에서{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  서비스 설계부터 운영, 데이터 분석까지 전 과정
                </span>
                을 경험했습니다.
              </p>
              <div className="h-4" />
              <p>
                개발할 때,{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  레거시 구조 개선, 자동화 환경 구축, 데이터 기반 의사결정
                </span>
                을 통해{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  제품 품질을 안정적으로 개선하는 데 중점
                </span>
                을 두고 있습니다.
              </p>
              <p>
                또한{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  발전하는 AI 환경
                </span>
                속에서 새로운 도구와 기술을 지속적으로 찾아보고 실제 프로젝트에 적용하며,{" "}
                <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                  생산성을 높이고 품질을 잃지 않으려는 개발 방식
                </span>
                을 실천하고 있습니다.
              </p>
            </div>
          </div>

          {/* 핵심역량 */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              핵심역량
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="250">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--theme-color)" }} />
                <span className="text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
                  <span className="font-semibold" style={{ color: "var(--theme-color)" }}>서비스 전 과정 경험</span>{" "}
                  (설계 → 구현 → 운영 → 데이터 분석)
                </span>
              </li>
              <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--theme-color)" }} />
                <span className="text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
                  <span className="font-semibold" style={{ color: "var(--theme-color)" }}>복잡한 인터랙션 및 대규모 UI 구현</span>{" "}
                  (에디터, 가상 스크롤, 워크플로우 설계)
                </span>
              </li>
              <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="350">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--theme-color)" }} />
                <span className="text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
                  <span className="font-semibold" style={{ color: "var(--theme-color)" }}>데이터 기반 제품 개선 경험</span>{" "}
                  (GA4, Mixpanel 이벤트 설계 및 지표 분석)
                </span>
              </li>
              <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--theme-color)" }} />
                <span className="text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
                  <span className="font-semibold" style={{ color: "var(--theme-color)" }}>CI/CD 및 운영 환경 구축</span>{" "}
                  (GitHub Actions, PM2, AWS EC2)
                </span>
              </li>
              <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="450">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--theme-color)" }} />
                <span className="text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
                  <span className="font-semibold" style={{ color: "var(--theme-color)" }}>고객 요구 분석 및 도메인 기반 문제 해결</span>{" "}
                  (고객 소통 및 프론트·백엔드·AI 개발자 협업)
                </span>
              </li>
              <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="500">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--theme-color)" }} />
                <span className="text-base leading-relaxed text-zinc-900 dark:text-zinc-50">
                  <span className="font-semibold" style={{ color: "var(--theme-color)" }}>신기술 리서치 및 프로젝트 적용</span>{" "}
                  (AI/자동화 도구 활용을 통한 생산성 향상)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
