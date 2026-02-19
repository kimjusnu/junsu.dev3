"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { Trophy } from "lucide-react";

export function ExperienceSection() {
  const [aimbeImageError, setAimbeImageError] = useState(false);
  const [innovatorImageError, setInnovatorImageError] = useState(false);
  const [startupqtImageIndex, setStartupqtImageIndex] = useState(0);
  const [myfeed15ImageIndex, setMyfeed15ImageIndex] = useState(0);
  const [myfeed10ImageIndex, setMyfeed10ImageIndex] = useState(0);
  
  const startupqtImages = [
    "/startupqt1.png",
    "/startupqt2.png",
    "/startupqt3.png",
    "/startupqt4.png",
    "/startupqt5.png",
    "/startupqt6.png",
  ];
  
  const myfeed15Images = [
    "/myfeed1.png",
    "/myfeed4.png",
    "/myfeed5.png",
  ];
  
  const myfeed10Images = [
    "/myfeed6.png",
    "/myfeed2.png",
    "/myfeed3.png",
  ];
  
  const goToNextImage = (setter: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    setter((prev) => (prev + 1) % length);
  };
  
  const goToPrevImage = (setter: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    setter((prev) => (prev - 1 + length) % length);
  };

  // 경력 계산 함수 (2025.03부터 현재까지)
  const calculateExperience = () => {
    const startDate = new Date(2025, 2, 1); // 2025년 3월 (월은 0부터 시작하므로 2 = 3월)
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    if (years > 0 && months > 0) {
      return `${years}년 ${months}개월`;
    } else if (years > 0) {
      return `${years}년`;
    } else {
      return `${months}개월`;
    }
  };

  return (
    <section id="experience" className="bg-linear-to-b from-white to-[#FAFBFC] px-8 py-20 dark:from-[#0F0F0F] dark:to-[#18181B] md:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h2
            className="mb-2 flex items-center gap-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            data-aos="fade-up"
          >
            <HiOutlineBriefcase className="h-8 w-8" style={{ color: "var(--theme-color)" }} />
            Experience
          </h2>
          <p
            className="text-lg text-zinc-600 dark:text-zinc-400"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            총 경력: {calculateExperience()} (2025.03 ~ 현재)
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* AimBe Lab */}
          <div
            className="relative overflow-hidden rounded-xl border-2 border-zinc-200 bg-linear-to-b from-white to-[#FAFBFC] p-6 shadow-lg dark:border-zinc-800 dark:from-[#27272A] dark:to-[#18181B] md:p-10"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="mb-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {!aimbeImageError && (
                  <div className="relative h-[22px] w-[100px] shrink-0">
                    <Image
                      src="/AimBeLab_Color.png"
                      alt="AimBe Lab"
                      fill
                      className="object-contain"
                      unoptimized
                      onError={() => setAimbeImageError(true)}
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 md:text-2xl">
                  에임비랩 (AimBe Lab)
                </h3>
              </div>
              <p className="text-base font-medium text-zinc-500 dark:text-zinc-400">
                2025.07 ~ 현재 | SW개발팀 | 프론트엔드 | 개발 | 대리
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Project 1 */}
              <div
                className="flex flex-col gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  AimbeLAB 홈페이지 리빌딩
                </h4>
                <ul className="flex flex-col gap-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <li>• 투자자 중심 소개 페이지 → 서비스 중심 구조로 전면 기획 전환</li>
                  <li>• GA/Mixpanel 데이터 분석 기반 정보 구조 재설계</li>
                  <li>• 생성형 AI + Pencil AI로 UI 디자인 단독 수행</li>
                  <li>• Next.js + TypeScript 전면 개발</li>
                  <li>• Flow API로 백엔드 리소스 없이 API 구조 구현</li>
                  <li>• GitHub Actions 배포 및 Sentry 모니터링 환경 구축</li>
                  <li className="mt-2 flex items-start gap-3">
                    <Trophy className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--theme-color)" }} />
                    <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                      기존 외주 계획(8,800,000원)을 단독 개발로 전환하여 비용 절감
                    </span>
                  </li>
                </ul>
                <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  기술: Next.js, TypeScript, Flow API, Tailwind, MUI, GitHub
                  Actions, GA4, Mixpanel, Sentry
                </p>
              </div>

              {/* Project 2 - 마이피드 1.5 */}
              <div
                className="flex flex-col gap-6 border-b border-zinc-200 pb-6 dark:border-zinc-800 lg:flex-row lg:gap-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* Left: Text Content (60%) */}
                <div className="flex-1 lg:w-3/5">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                      마이피드 1.5 개발 및 유지보수
                    </h4>
                    <ul className="flex flex-col gap-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <li>• AI 브라우저 툴을 활용한 모니터링 자동화 시스템 구축</li>
                    <li>• 축산 이동방지 크롤링 시스템과 불량 디바이스 결합하여 출장계획 자동화 기능 구현</li>
                    <li>• 이미지 최적화 및 화면 렌더링 속도 최적화</li>
                    <li>• 국내/해외 유저에 따라 위치기반 Mapbox, 네이버지도를 프론트단에서 판단하여 설치 기기 위치를 보여주는 화면 개발</li>
                    <li>• jQuery 1.x, 2.x 혼용 문제 해결 및 jQuery 4.0.0으로 통일 마이그레이션</li>
                    <li>• GA4 이벤트 설계 및 사용자 행동 데이터 수집 체계 정비</li>
                    <li>• Admin 페이지 개발</li>
                  </ul>
                  <div className="mt-2 flex items-start gap-3">
                    <Trophy className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--theme-color)" }} />
                    <span className="font-semibold" style={{ color: "var(--theme-color)" }}>
                      <a 
                        href="https://www.etoday.co.kr/news/view/2537859" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        농림축산식품부 장관상 수상
                      </a>
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    기술: FastAPI, Jinja2, Metronic, Bootstrap 4, jQuery, Chart.js,
                    Mapbox GL JS, GA4
                  </p>
                  </div>
                </div>

                {/* Right: Image Carousel (40%) */}
                <div className="flex items-center justify-center lg:w-2/5">
                  <div className="relative w-full max-w-md">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={myfeed15Images[myfeed15ImageIndex]}
                        alt={`마이피드 1.5 Screenshot ${myfeed15ImageIndex + 1}`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <button
                        onClick={() => goToPrevImage(setMyfeed15ImageIndex, myfeed15Images.length)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        onMouseEnter={(e) => {
                          const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                        aria-label="Previous image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="flex gap-2">
                        {myfeed15Images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setMyfeed15ImageIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === myfeed15ImageIndex
                                ? "w-6"
                                : "w-2 bg-zinc-300 dark:bg-zinc-700"
                            }`}
                            style={index === myfeed15ImageIndex ? { backgroundColor: "var(--theme-color)" } : undefined}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={() => goToNextImage(setMyfeed15ImageIndex, myfeed15Images.length)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        onMouseEnter={(e) => {
                          const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                        aria-label="Next image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - 마이피드 1.0 */}
              <div
                className="flex flex-col gap-6 lg:flex-row lg:gap-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {/* Left: Text Content (60%) */}
                <div className="flex-1 lg:w-3/5">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                      마이피드 1.0 유지보수 및 안정화
                    </h4>
                    <ul className="flex flex-col gap-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <li>• B2B 고객 중 주요 고객의 다수 요구사항을 빠르게 수용하고 반영</li>
                    <li>• 레거시 코드베이스 신속 파악 및 기능 개선</li>
                    <li>• 이용약관, 개인정보처리방침, 위치기반서비스 업데이트 개선</li>
                    <li>• 기존 시스템의 기술부재 및 부족한 부분 전수조사 후 모던화</li>
                    <li>• 실서비스 운영 이슈 대응 및 기능 안정화</li>
                  </ul>
                  <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    기술: FastAPI, Jinja2, Metronic, Bootstrap 4, jQuery, Mapbox GL
                    JS, Naver Maps API, DataTables, FullCalendar, CKEditor, TinyMCE
                  </p>
                  </div>
                </div>

                {/* Right: Image Carousel (40%) */}
                <div className="flex items-center justify-center lg:w-2/5">
                  <div className="relative w-full max-w-md">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={myfeed10Images[myfeed10ImageIndex]}
                        alt={`마이피드 1.0 Screenshot ${myfeed10ImageIndex + 1}`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <button
                        onClick={() => goToPrevImage(setMyfeed10ImageIndex, myfeed10Images.length)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        onMouseEnter={(e) => {
                          const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                        aria-label="Previous image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="flex gap-2">
                        {myfeed10Images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setMyfeed10ImageIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === myfeed10ImageIndex
                                ? "w-6"
                                : "w-2 bg-zinc-300 dark:bg-zinc-700"
                            }`}
                            style={index === myfeed10ImageIndex ? { backgroundColor: "var(--theme-color)" } : undefined}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={() => goToNextImage(setMyfeed10ImageIndex, myfeed10Images.length)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        onMouseEnter={(e) => {
                          const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                        aria-label="Next image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Innovators */}
          <div
            className="relative overflow-hidden rounded-xl border-2 border-zinc-200 bg-linear-to-b from-white to-[#FAFBFC] p-6 shadow-lg dark:border-zinc-800 dark:from-[#27272A] dark:to-[#18181B] md:p-10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="mb-8 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {!innovatorImageError && (
                  <div className="relative h-[22px] w-[100px] shrink-0">
                    <Image
                      src="/the_innovators_logo.png"
                      alt="The Innovators"
                      fill
                      className="object-contain"
                      unoptimized
                      onError={() => setInnovatorImageError(true)}
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 md:text-2xl">
                  주식회사 더이노베이터스
                </h3>
              </div>
              <p className="text-base font-medium text-zinc-500 dark:text-zinc-400">
                2025.03 ~ 2025.06 | TA기술연구부서 | 프론트엔드 | 개발 | 인턴
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
              {/* Left: Text Content (60%) */}
              <div className="flex-1 lg:w-3/5">
                <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    StartupQT — 퀴즈 저작·검수·관리 시스템
                  </h4>
                  <ul className="flex flex-col gap-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <li>• 사용자 플로우 정의 및 기능 명세/WBS 기반 설계 참여</li>
                    <li>• 문제 유형별 동적 입력 폼 및 Tiptap 기반 에디터 구조 구현</li>
                    <li>• axiosInstance + Zustand 기반 인증/상태 관리 구조 정비</li>
                    <li>• SSR 환경 Hydration 오류 디버깅 및 렌더 안정성 개선</li>
                    <li>• GitHub Actions + EC2 + PM2 기반 배포 자동화 경험</li>
                    <li>• Lighthouse 기반 성능 점검 및 개선 기준 수립</li>
                  </ul>
                  <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    기술: Next.js, TypeScript, Zustand, Tiptap, MUI, GitHub Actions
                  </p>
                </div>
              </div>

              {/* Right: Image Carousel (40%) */}
              <div className="flex items-center justify-center lg:w-2/5">
                <div className="relative w-full max-w-md">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                    <Image
                      src={startupqtImages[startupqtImageIndex]}
                      alt={`StartupQT Screenshot ${startupqtImageIndex + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="mt-4 flex items-center justify-center gap-4">
                      <button
                        onClick={() => goToPrevImage(setStartupqtImageIndex, startupqtImages.length)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        onMouseEnter={(e) => {
                          const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                        aria-label="Previous image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                    
                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                      {startupqtImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setStartupqtImageIndex(index)}
                          className={`h-2 w-2 rounded-full transition-all ${
                            index === startupqtImageIndex
                              ? "w-6"
                              : "w-2 bg-zinc-300 dark:bg-zinc-700"
                          }`}
                          style={index === startupqtImageIndex ? { backgroundColor: "var(--theme-color)" } : undefined}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                      <button
                        onClick={() => goToNextImage(setStartupqtImageIndex, startupqtImages.length)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        onMouseEnter={(e) => {
                          const color = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.color = color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.color = "";
                        }}
                        aria-label="Next image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
