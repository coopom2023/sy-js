import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "SY Project",
  description: "A SY Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/components-vue' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'components-vue 示例', link: '/components-vue' },
          { text: 'components-react 示例', link: '/components-react' },
          { text: 'utils 工具', link: '/utils' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coopom2023' }
    ],

  }
})
