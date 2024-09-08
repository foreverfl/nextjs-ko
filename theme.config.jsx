import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

import { ArrowUpRight } from "@geist-ui/icons";
import cn from "classnames";

const logo = (
  <div className="flex items-center gap-2">
    {/* Vercel 로고 */}
    <svg
      aria-label="Vercel logomark"
      height="22"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="black"
      ></path>
    </svg>

    {/* 구분 기호 */}
    <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
      <path
        d="M22 5L9 28"
        stroke="#eaeaea"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>

    {/* Next.js 로고 */}
    <svg
      aria-label="Next.js logotype"
      height="18"
      role="img"
      viewBox="0 0 394 79"
    >
      <path
        d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
        fill="black"
      ></path>
      <path
        d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
        fill="black"
      ></path>
      <path
        d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
        fill="black"
      ></path>
      <path
        d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
        fill="black"
      ></path>
      <path
        clipRule="evenodd"
        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
        fill="black"
        fillRule="evenodd"
      ></path>
      <path
        d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
        fill="black"
      ></path>
      <path
        d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
        fill="black"
      ></path>
      <path
        d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
        fill="black"
      ></path>
    </svg>
  </div>
);

const config = {
  docsRepositoryBase: "https://github.com/foreverfl/nextjs-ko/blob/main",
  project: {
    link: "https://github.com/foreverfl/nextjs-ko",
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://nextra-ko.mogumogu.dev/og.jpeg"
        : `https://nextra-ko.mogumogu.dev/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Next.js로 아름다운 웹사이트를 만들어보세요."
        />
        <meta
          name="og:description"
          content="Next.js로 아름다운 웹사이트를 만들어보세요."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta
          name="twitter:site:domain"
          content="https://nextjs-ko.mogumogu.dev/"
        />
        <meta name="twitter:url" content="https://nextra-ko.mogumogu.dev/" />
        <meta
          name="og:title"
          content={title ? title + " – Next.js" : "Next.js"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Next.js" />
        <link
          rel="icon"
          href="/NEXTJS/icon/light-background/nextjs-icon-light-background.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/NEXTJS/icon/dark-background/nextjs-icon-dark-background.png"
          type="image/png"
        />
        <link
          rel="icon"
          href="/NEXTJS/icon/dark-background/nextjs-icon-dark-background.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 3,
    titleComponent({ title, type }) {
      if (title === "Using App Router" || title === "Using Pages Router") {
        return null;
      }
      return <>{title}</>;
    },
  },
  components: {
    h1: ({ className, ...props }) => {
      const computedClassName = cn(
        "text-[2.25em] font-semibold my-4 mb-[0.888em] leading-[1.111] text-[hsl(0,0%,9%)] dark:text-[hsl(0,0%,100%)]",
        className
      );
      return (
        <h1 className={computedClassName} {...props}>
          {props.children}
        </h1>
      );
    },

    h2: ({ className, ...props }) => {
      const computedClassName = cn(
        // 테두리 스타일 및 패딩
        "border-t border-solid border-t-1 border-gray-200 dark:border-gray-700",
        // 텍스트 스타일
        "font-semibold text-[1.5em] my-8 leading-[1.3333] text-gray-800 dark:text-gray-100",
        // 기타 스타일
        "pt-10 scroll-mt-[11px]",
        className
      );

      return (
        <h2 className={computedClassName} {...props}>
          {props.children}
        </h2>
      );
    },

    h3: ({ className, ...props }) => {
      const computedClassName = cn(
        // 텍스트 스타일
        "font-semibold text-[1.25em] mt-[1.6em] mb-[0.6em] leading-[1.6] text-gray-800 dark:text-gray-100",

        className
      );

      return (
        <h3 className={computedClassName} {...props}>
          {props.children}
        </h3>
      );
    },

    a: ({ href = "", className, ...props }) => {
      const isExternal = href.startsWith("http"); // 외부 링크 여부 확인
      const computedClassName = cn(
        "nx-text-primary-600 nx-no-underline nx-decoration-from-font [text-underline-position:from-font]",
        className
      );

      return (
        <a
          href={href}
          className={computedClassName}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {props.children}
          {isExternal && <ArrowUpRight size={15} />}
        </a>
      );
    },

    p: ({ className, ...props }) => {
      const computedClassName = cn("mt-4 mb-4", className);

      return (
        <p className={computedClassName} {...props}>
          {props.children}
        </p>
      );
    },

    blockquote: ({ className, ...props }) => {
      const computedClassName = cn(
        "p-3 my-8 text-sm border border-gray-200 rounded not-italic font-normal",
        className
      );

      return <blockquote className={computedClassName} {...props} />;
    },

    ul: ({ className, ...props }) => {
      const computedClassName = cn(
        "nx-mt-6 first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6",
        className
      );

      return (
        <ul className={computedClassName} {...props}>
          {props.children}
        </ul>
      );
    },
  },
  toc: {
    title: "목차",
    backToTop: true,
  },
  editLink: {
    text: "이 페이지를 GitHub에서 편집하기",
  },
  feedback: {
    content: <>질문이 있으신가요?</>,
    labels: "feedback",
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-start sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=nextra.site"
          >
            <svg height={20} viewBox="0 0 283 64" fill="none">
              <title>Vercel</title>
              <path
                fill="currentColor"
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              />
            </svg>
            <span>&nbsp;에서 배포됨</span>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Next.js Project.
        </p>
      </div>
    ),
  },
};

export default config;
