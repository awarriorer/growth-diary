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
          title: 'http',
          collapsable: false,
          children: [
            '/http/request-life',
            '/http/request-content',
            '/http/browser-cache',
            '/http/cross-domain/',
          ]
        }
      ]
    }
  }