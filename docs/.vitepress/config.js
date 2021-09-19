module.exports = {
  lang: 'en-US',
  title: 'Vue Tour Documentation',
  description:
    'Vue Tour is a lightweight, simple and customizable guided tour plugin for use with Vue.js.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'GitHub',
        link: 'https://github.com/pulsardev/vue-tour/',
      },
    ],
    sidebar: {
      '/': getGuideSidebar(),
      '/guide/': getGuideSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
    {
      text: 'Documentation',
      children: [
        { text: 'What is Vue Tour?', link: '/' },
        { text: 'Getting started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Features', link: '/guide/features' },
        { text: 'Template customization', link: '/guide/template-customization' },
        { text: 'Callbacks', link: '/guide/callbacks' },
      ],
    },
  ]
}
