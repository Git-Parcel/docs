import { defineLocale } from './utils/locale.ts'

export default {
  zh_cn: defineLocale({
    lang: 'zh_cn',
    translation: {
      label: '简体中文 (中国大陆)',
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
        search: {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索',
            },
            modal: {
              displayDetails: '显示详细列表',
              resetButtonTitle: '重置搜索',
              backButtonTitle: '关闭搜索',
              noResultsText: '没有结果',
              footer: {
                selectText: '选择',
                selectKeyAriaLabel: '输入',
                navigateText: '导航',
                navigateUpKeyAriaLabel: '上箭头',
                navigateDownKeyAriaLabel: '下箭头',
                closeText: '关闭',
                closeKeyAriaLabel: 'Esc',
              },
            },
          },
        },
      },
    },
  }),
  en_us: defineLocale({
    lang: 'en_us',
    translation: {
      label: 'English (US)',
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
