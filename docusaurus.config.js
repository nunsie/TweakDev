module.exports = {
  title: 'TweakDev',
  tagline: 'iOS tweak development resources',
  url: 'https://developer.nusrath.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'nunsie', // Usually your GitHub org/user name.
  projectName: 'tweakdev', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TweakDev',
      logo: {
        alt: 'TweakDev Logo',
        src: 'img/iPhone.png',
      },
      links: [
        { to: 'docs/doc1', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/nunsie/tweakdev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'r/jailbreak',
              href: 'https://www.reddit.com/r/jailbreak',
            },
            {
              label: 'r/jailbreakdevelopers',
              href: 'https://www.reddit.com/r/jailbreakdevelopers',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TweakDev, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
