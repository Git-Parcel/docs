import { defineLocale } from './utils/locale.ts'

export default {
  'zh-CN': defineLocale({
    lang: 'zh-CN',
    translation: {
      label: '简体中文',
      title: 'Git Parcel',
      description: 'Git Parcel 文档',
      themeConfig: {
        nav: {
          more: '更多',
          explore: '探索',
          guide: {
            text: '指南',
            player: '玩家',
            developer: '开发者',
            contribute: '贡献',
          },
        },
        editLink: {
          text: '在 Github 上编辑此页',
        },
        lastUpdated: { text: '上次更新' },
      },
    },
  }),
  'en-US': defineLocale({
    lang: 'en-US',
    translation: {
      label: 'English',
      title: 'Git Parcel',
      description: 'Git Parcel Documentation',
      themeConfig: {
        nav: {
          more: 'More',
          explore: 'Explore',
          guide: {
            text: 'Guide',
            player: 'Player',
            developer: 'Developer',
            contribute: 'Contribute',
          },
        },
        editLink: {
          text: 'Edit this page on GitHub',
        },
        lastUpdated: { text: 'Last updated' },
      },
    },
  }),
}
