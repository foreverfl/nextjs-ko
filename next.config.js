const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
    // 외부 이미지를 허용할 도메인 추가
    images: {
        domains: ['nextjs.org'],
    }
});