module.exports = {
  base: '/alarm-dog-docs/',
  title: '哮天犬监控告警平台',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: 'dist',
  serviceWorker: true,
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/tal-tech/alarm-dog',
    repoLabel: 'GitHub',
    editLinks: true,
    docsDir: 'docs',
    label: '简体中文',
    selectText: 'Languages',
    editLinkText: '哮天犬后台',
    lastUpdated: '上次更新',
    smoothScroll: true,
    sidebarDepth: 3,
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    // nav: [
    //   {
    //     text: '指南',
    //     link: '/',
    //   },
    //   {
    //     text: '更新日志',
    //     link: '/changelog.md'
    //   }
    // ],
    sidebar: [
      {
        title: '前言',
        collapsable: false,
        children: [
          ['/preface/introduction', '项目介绍'],
          ['/preface/platform-arch', '平台架构'],
          ['/preface/concept', '概念介绍'],
        ]
      },
      {
        title: '告警接入',
        collapsable: false,
        children: [
          ['/alarm/quick-start.md', '快速入门'],
          ['/alarm/alarm-api.md', '告警接口API'],
          ['/alarm/aliyun.md', '阿里云告警接入'],
          ['/alarm/arms.md', '阿里云Arms告警接入'],
          ['/alarm/grafana.md', 'Grafana告警接入'],
          ['/alarm/falcon.md', 'OpenFalcon告警接入'],
          ['/alarm/alertmanager.md', 'AlertManager告警接入'],
          ['/alarm/webhook-notice-data-format.md', 'WebHook通知数据交互格式'],
        ]
      },
      {
        title: 'SDK',
        collapsable: false,
        children: [
          ['/sdk/summary-alarm.md', '哮天犬告警SDK'],
          ['/sdk/php-alarm.md', 'PHP告警SDK'],
          ['/sdk/golang-alarm.md', 'Golang告警SDK'],
          ['/sdk/java-alarm.md', 'Java告警SDK'],
          ['/sdk/shell-alarm.md', 'Shell脚本告警示例'],
          ['/sdk/nodejs-alarm.md', 'NodeJs脚本告警示例'],
          ['/sdk/hyperf-noticer.md', '哮天犬通知SDK'],
        ]
      },
      {
        title: '监控接入',
        collapsable: false,
        children: [
          ['/monitor/protocol-detect.md', '心跳探活'],
          ['/monitor/universal.md', '通用监控'],
          ['/monitor/cycle-compare.md', '同比环比监控'],
          ['/monitor/data-source.md', '数据源'],
          ['/monitor/cycle-compare-datainit.md', '同比环比数据初始化'],
        ]
      },
      {
        title: '高级功能',
        collapsable: false,
        children: [
          ['/advance-function/compress.md', '告警收敛'],
          ['/advance-function/filter.md', '告警过滤'],
          ['/advance-function/upgrade.md', '告警升级'],
          ['/advance-function/workflow.md', '告警工作流'],
          ['/advance-function/receiver.md', '告警通知人'],
          ['/advance-function/dispatcher.md', '分级告警'],
          ['/advance-function/alarm-template.md', '告警模板'],
          ['/advance-function/recovery.md', '自动恢复'],
        ]
      },
      {
        title: '开放平台',
        collapsable: false,
        children: [
          ['/openapi/introduction.md', '开放平台'],
          ['/openapi/app-apply.md', '应用申请'],
          ['/openapi/api-sign.md', '接口签名'],
          ['/openapi/api.md', '接口列表'],
        ]
      },
      {
        title: '常见问题',
        collapsable: false,
        children: [
          ['/faq/summary.md', '问题汇总'],
          ['/faq/how-to-config-dinggroup.md', '怎么配置钉钉机器人告警'],
          ['/faq/how-to-config-yachgroup.md', '怎么配置知音楼机器人告警'],
          ['/faq/cannot-receiver-sms-phone.md', '收不到短信和电话'],
          ['/faq/how-to-use-webhook.md', 'Webhook怎么用'],
          ['/faq/how-to-find-alarm-content.md', '怎么找到告警内容'],
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    // 图片放大插件
    '@vuepress/medium-zoom': {
      // selector: 'img.zoom-custom-imgs',
      // // medium-zoom options here
      // // See: https://github.com/francoischalifour/medium-zoom#options
      // options: {
      //   margin: 16
      // }
    },
    // 返回顶部
    '@vuepress/back-to-top': {

    }
  },
  async ready() {
    console.log('ready....')
  }
}
