const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Anwendungsentwicklung in SAP S/4HANA',
  tagline: '',
  url: 'https://appenmaier.github.io',
  baseUrl: '/s4hana/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/appenmaier/s4hana/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

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
            docId: 'apmf/documentation/apmf',
            position: 'left',
            label: 'ABAP Programmiermodell für SAP Fiori',
          },
	  {
            type: 'doc',
            docId: 'rap/documentation/rap',
            position: 'left',
            label: 'RESTful ABAP Programmiermodell (RAP)',
          },
	  {
            type: 'doc',
            docId: 'additional-material/sap-flightmodel',
            position: 'left',
            label: 'Zusatzmaterial',
          },
          {
            href: 'https://github.com/appenmaier/s4hana',
            label: 'GitHub',
            position: 'right',
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
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
    }),
};

module.exports = config;
