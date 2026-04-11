import { LocaleConfig } from 'vitepress'
import { buildSidebars } from './sidebar.ts'
import { DefaultTheme } from 'vitepress'

export type LocaleConfigValue<ThemeConfig = any> = LocaleConfig<
  ThemeConfig
>[string]

type Options = {
  base?: string
  lang: string
  translation: {
    label: string
    title: string
    description: string
    themeConfig: {
      nav: {
        more: string
        explore: string
        guide: {
          text: string
          player: string
          developer: string
          contribute: string
        }
      }
      editLink: { text: string }
      lastUpdated: { text: string }
      /**
       * @see DefaultTheme.LocalSearchOptions.locales
       */
      search?: Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>
    }
  }
}

export function defineLocale(options: Options) {
  const opts = Object.assign({}, { base: 'docs' }, options)
  const t = opts.translation

  return {
    lang: opts.lang,
    label: t.label,
    title: t.title,
    titleTemplate: `:title | ${t.title}`,
    description: t.description,
    themeConfig: {
      nav: [
        {
          text: t.themeConfig.nav.guide.text,
          items: [
            {
              text: t.themeConfig.nav.guide.player,
              link: `/${opts.lang}/player`,
            },
            {
              text: t.themeConfig.nav.guide.developer,
              link: `/${opts.lang}/developer`,
            },
            {
              text: t.themeConfig.nav.guide.contribute,
              link: `/${opts.lang}/contribute`,
            },
          ],
        },
        {
          text: 'API',
          link: `/${opts.lang}/developer/api/00-parcel-format`,
        },
        {
          text: t.themeConfig.nav.explore,
          link: 'https://git-parcel.github.io/discover',
        },
      ],

      sidebar: buildSidebars(opts.base, opts.lang),
      editLink: {
        pattern: 'https://github.com/Git-Parcel/docs/edit/main/docs/:path',
        text: t.themeConfig.editLink.text,
      },

      search: {
        provider: 'local',
        options: {
          locales: {
            ...(t.themeConfig.search
              ? { [opts.lang]: t.themeConfig.search }
              : {}),
          },
        },
      },
      lastUpdated: { text: t.themeConfig.lastUpdated.text },
    },
  } satisfies LocaleConfigValue<DefaultTheme.Config>
}
