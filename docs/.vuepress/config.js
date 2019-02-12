module.exports = {
    title: '知识归纳',
    description: '架构师的路上……',
    head: [
      ['link', { rel: 'icon', href: 'http://www.uncle-yang.com/pc/image/icon/uncle.ico' }]
    ],
    markdown: {
      lineNumbers: true
    },
    dest: "dist",

    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '小站', link: 'http://www.uncle-yang.com' },
      ],
      sidebar: [
        {
          title: 'HTTP',
          collapsable: false,
          children: [
            '/http/request-life',
            '/http/request-content',
            '/http/browser-cache',
            '/http/request-limit.md',
            '/http/cross-domain/',
            '/http/about-proxy.md',
            '/http/about-https.md',
            '/http/webSocket.md',
            '/http/http-history',
            '/http/api-architecture',
            '/http/http-optimization.md'
          ]
        },
        {
          title: 'HTML',
          collapsable: false,
          children: [
            '/html/browser-render.md',
            '/html/seo.md',
            '/html/meta.md',
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            '/style/layout-center.md',
            '/style/flex.md',
            '/style/less.md',
            '/style/sass.md',
          ]
        },
        {
          title: 'JS基础',
          collapsable: false,
          children: [
            '/js-base/string.md',
          ]
        },
      ],
      lastUpdated: '上次更新',
    }
  }