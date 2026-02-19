import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorThemeProvider } from "@/components/color-theme-provider";
import AOSInit from "@/components/aos-init";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kimjusnu.vercel.app"),
  title: "김준수 | Junsu Kim",
  description: "프론트엔드 개발자 김준수의 포트폴리오. Next.js, TypeScript, React 기반으로 서비스를 설계·구현해온 프론트엔드 개발자입니다.",
  keywords: [
    "김준수",
    "Junsu Kim",
    "프론트엔드 개발자",
    "프론트엔드 포트폴리오",
    "김준수 포트폴리오",
    "Next.js 개발자",
    "TypeScript 개발자",
    "React 개발자",
    "FE 개발자",
    "웹 개발자",
    "포트폴리오",
  ],
  authors: [{ name: "김준수", url: "https://github.com/kimjusnu" }],
  creator: "김준수",
  publisher: "김준수",
  icons: {
    icon: [
      { url: "/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://kimjusnu.vercel.app",
    siteName: "김준수 포트폴리오",
    title: "김준수 | Junsu Kim - 프론트엔드 개발자",
    description: "프론트엔드 개발자 김준수의 포트폴리오. Next.js, TypeScript, React 기반으로 서비스를 설계·구현해온 프론트엔드 개발자입니다.",
    images: [
      {
        url: "/ssumnail.png",
        width: 1200,
        height: 630,
        alt: "김준수 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김준수 | Junsu Kim - 프론트엔드 개발자",
    description: "프론트엔드 개발자 김준수의 포트폴리오",
    images: ["/ssumnail.png"],
  },
  alternates: {
    canonical: "https://kimjusnu.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 카카오톡 공유 메타 태그 */}
        <meta property="og:image" content="/ssumnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="김준수 포트폴리오" />
        <meta name="twitter:image" content="/ssumnail.png" />
        
        {/* JSON-LD 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "김준수",
              "alternateName": "Junsu Kim",
              "jobTitle": "프론트엔드 개발자",
              "description": "Next.js, TypeScript, React 기반 프론트엔드 개발자",
              "url": "https://kimjusnu.vercel.app",
              "sameAs": [
                "https://github.com/kimjusnu",
                "https://dietisdie.tistory.com"
              ],
              "email": "junsu4621@naver.com",
              "knowsAbout": [
                "Frontend Development",
                "Next.js",
                "TypeScript",
                "React",
                "Web Development"
              ]
            }),
          }}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('portfolio-color-theme');
                  const themes = { spring: '#f94570', summer: '#09e022', autumn: '#EA580C', winter: '#3B82F6' };
                  const theme = stored && Object.keys(themes).includes(stored) ? stored : 'winter';
                  const color = themes[theme];
                  const root = document.documentElement;
                  root.style.setProperty('--theme-color', color);
                  root.className = root.className.replace(/theme-spring|theme-summer|theme-autumn|theme-winter/g, '');
                  root.classList.add('theme-' + theme);
                  root.setAttribute('data-color-theme', theme);
                  
                  // 스크롤바 스타일 적용
                  const style = document.createElement('style');
                  style.textContent = \`
                    ::-webkit-scrollbar {
                      width: 10px !important;
                      height: 10px !important;
                    }
                    ::-webkit-scrollbar-track {
                      background: transparent !important;
                    }
                    ::-webkit-scrollbar-thumb {
                      background: \${color} !important;
                      border-radius: 10px !important;
                      border: 2px solid transparent !important;
                      background-clip: padding-box !important;
                    }
                    ::-webkit-scrollbar-thumb:hover {
                      background: \${color} !important;
                      opacity: 0.8 !important;
                    }
                    html {
                      scrollbar-width: thin !important;
                      scrollbar-color: \${color} transparent !important;
                    }
                    body {
                      scrollbar-width: thin !important;
                      scrollbar-color: \${color} transparent !important;
                    }
                  \`;
                  document.head.appendChild(style);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <AOSInit />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="portfolio-theme"
          forcedTheme={undefined}
        >
          <ColorThemeProvider>{children}</ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
