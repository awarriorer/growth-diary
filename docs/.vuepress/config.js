module.exports = {
    title: '知识归纳',
    description: '学习的路上……',
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
        { text: 'gitHub', link: 'https://github.com/awarriorer/growth-diary' },
        { text: '小站', link: 'http://www.uncle-yang.com' },
      ],
      sidebarDepth: '0',
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
            '/http/http-optimization.md',
          ]
        },
        {
          title: '常用跨域方案',
          collapsable: true,
          children: [
            '/http/cross-domain/jsonp.md',
            '/http/cross-domain/cors.md',
            '/http/cross-domain/nginx-proxy.md',
            '/http/cross-domain/server-proxy.md',
            '/http/cross-domain/iframe-postmessage.md',
            '/http/cross-domain/iframe-window-name.md',
            '/http/cross-domain/cors-upload.md',
            '/http/cross-domain/iframe-form-postMessage-upload.md',
          ]
        },
        {
          title: 'HTML',
          collapsable: true,
          children: [
            '/html/browser-render.md',
            './html/semanticization.md',
            '/html/seo.md',
            '/html/meta.md',
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            './style/selector.md',
            '/style/layout-center.md',
            '/style/commonly-used.md',
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
            '/js/class.md',
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
            '/js-advanced/promise.md',
            '/js-advanced/async-await.md'
          ]
        },
        {
          title: '设计模式',
          collapsable: true,
          children: [
            '/design-patterns/factory.md',
            '/design-patterns/singleton.md',
            '/design-patterns/adapter.md',
            '/design-patterns/filter.md',
            '/design-patterns/decorator.md',
            '/design-patterns/proxy.md',
            '/design-patterns/observer.md',
            '/design-patterns/command.md',
          ]
        },
        {
          title: 'Vue',
          collapsable: true,
          children: [
            '/vue-analysis/vue-ready.md',
            '/vue-analysis/vue-1.md',
            '/vue-analysis/vue-2.md',
            '/vue-analysis/new-vue.md',
            '/vue-analysis/state-0.md',
            '/vue-analysis/state-1.md',
            '/vue-analysis/state-2.md',
            '/vue-analysis/mount.md'
          ]
        },
        {
          title: 'Node',
          collapsable: true,
          children: [
            '/node/npm/command.md',
            '/node/npm/package.md',
          ]
        },
        {
          title: 'Webpack',
          collapsable: true,
          children: [
            './webpack/function-api.md'
          ]
        },
        {
          title: 'Docker',
          collapsable: true,
          children: [
            '/docker/command.md',
          ]
        },
        {
          title: '开发工具',
          collapsable: true,
          children: [
            '/dev-tools/chrome.md',
            '/dev-tools/git-command.md',
            '/dev-tools/iterm2.md',
            '/dev-tools/vscode.md',
            '/dev-tools/editor-config.md',
          ]
        },
      ],
      lastUpdated: '上次更新',
    }
  }