import 'jsr:@std/dotenv@0.225.6/load'
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import locales from './locales.ts'

const BASE = '/docs'
const isDev = Deno.args.includes('dev')

let config: UserConfig = {
  base: BASE,
  srcDir: '.',
  outDir: '../dist',
  cleanUrls: true,

  title: 'Git Parcel',
  description: 'A Minecraft mod',

  markdown: {
    math: true,
  },
  vite: {
    server: {
      allowedHosts: [
        'git-parcel.github.io',
        '.local',
      ],
    },
    resolve: {
      alias: {},
    },
  },
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: `${BASE}/logo/32x.png` }],
  ],

  lastUpdated: true,

  themeConfig: {
    externalLinkIcon: true,
    logo: '/logo/128x.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Git-Parcel',
      },
    ],
    footer: {
      message: 'License: MIT',
    },
  },
  locales,
} satisfies UserConfig<DefaultTheme.Config>

if (!isDev) {
  config = withMermaid(config)
}

export default defineConfig(config)
