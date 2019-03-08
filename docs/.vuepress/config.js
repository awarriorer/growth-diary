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
          collapsable: true,
          children: [
            '/http/request-life',
            '/http/request-content',
            '/http/response-status-codes.md',
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
          collapsable: true,
          children: [
            '/html/browser-render.md',
            '/html/seo.md',
            '/html/meta.md',
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            '/style/layout-center.md',
            '/style/flex.md',
            '/style/less.md',
            '/style/sass.md',
          ]
        },
        {
          title: 'JS基础',
          collapsable: true,
          children: [
            '/js/string.md',
            '/js/boolean.md',
            '/js/number.md',
            '/js/object.md',
            '/js/map.md',
            '/js/weakMap.md',
            '/js/array.md',
            '/js/set.md',
            '/js/weakSet.md',
            '/js/date.md',
            '/js/regExp.md',
            '/js/function.md',
            '/js/math.md',
            '/js/json.md',
            '/js/bom.md',
            '/js/dom.md',
            '/js/event.md',
            '/js/ajax.md',
            '/js/cookie-storage.md',
            '/js/file.md',
            '/js/promise.md',
            '/js/proxy.md',
            '/js/async-await.md',
            '/js/js-mind.md',
          ]
        },
        {
          title: 'Js 进阶',
          collapsable: true,
          children: [
            '/js-advanced/use-strict.md',
            '/js-advanced/ram.md',
            '/js-advanced/scope-prototype.md',
            '/js-advanced/extend.md',
            '/js-advanced/closure.md',
            '/js-advanced/module.md',
          ]
        },
        {
          title: '开发工具',
          collapsable: true,
          children: [
            '/dev-tools/chrome.md',
            '/dev-tools/git-command.md',
            '/dev-tools/editor-config.md',
          ]
        },
      ],
      lastUpdated: '上次更新',
    }
  }