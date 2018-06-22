module.exports = {
    title: '知识归纳',
    description: '架构师的路上……',
    head: [
      ['link', { rel: 'icon', href: '../images/icon/uncle.ico' }]
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
            '/http/cross-domain/',
          ]
        },
        // {
        //   title: 'Group 2',
        //   children: [ /* ... */ ]
        // }
      ]
    }
  }