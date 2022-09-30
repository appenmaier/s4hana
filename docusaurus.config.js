const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'SAP S/4HANA',
  tagline: 'Anwendungsentwicklung in SAP S/4HANA',
  url: 'https://appenmaier.github.io',
  baseUrl: '/s4hana/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'appenmaier',
  projectName: 's4hana',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/appenmaier/s4hana/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/appenmaier/s4hana/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Startseite',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
		  {
            type: 'doc',
            docId: 'introduction/overview',
            position: 'left',
            label: 'Einführung',
          },
          {
            type: 'doc',
            docId: 'abap/documentation/abap',
            position: 'left',
            label: 'ABAP',
          },
		  {
            type: 'doc',
            docId: 'abap-objects/documentation/abap-objects',
            position: 'left',
            label: 'ABAP Objects',
          },
		  {
            type: 'doc',
            docId: 'abap-cds/documentation/abap-cds',
            position: 'left',
            label: 'ABAP CDS',
          },
		  {
            type: 'doc',
            docId: 'apf/documentation/documentation',
            position: 'left',
            label: 'ABAP Programmiermodell für SAP Fiori',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/appenmaier/s4hana',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Daniel Appenmaier Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
		additionalLanguages: ['abap'],
      },
    }),
};

module.exports = config;
