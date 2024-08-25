const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
    // 외부 이미지를 허용할 도메인 추가
    images: {
        domains: ['nextjs.org'],
    },
    // 임시 배포 시 eslint 무시
    eslint: {
        ignoreDuringBuilds: true,
    },
});