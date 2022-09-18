import { defineUserConfig } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: "en-US",
  title: "🚀",
  description: "Cheat sheets",
  base: "/cheat-sheets/",
  theme: defaultTheme({
    sidebar: [
      {
        text: 'R',
        collapsible: true,
        link: '/R/',
        children: [
          {
            text: 'Tidyverse',
            link: '/R/Tidyverse/',
            children: [
              {
                text: 'Exploratory Data Analysis',
                link: '/R/Tidyverse/exploratory-data-analysis',
              },
            ],
          },
        ],
      },
    ],
  }),
});




