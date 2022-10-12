const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Anwendungsentwicklung in SAP S/4HANA',
  tagline: '',
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
            docId: 'introduction/introduction',
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
            docId: 'apmf/documentation/documentation',
            position: 'left',
            label: 'ABAP Programmiermodell für SAP Fiori',
          },
		  {
            type: 'doc',
            docId: 'rap/documentation/documentation',
            position: 'left',
            label: 'RESTful ABAP Programmiermodell (RAP)',
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
