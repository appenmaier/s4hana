const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Anwendungsentwicklung in SAP S/4HANA",
  tagline: "",
  url: "https://appenmaier.github.io",
  baseUrl: "/s4hana/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "appenmaier",
  projectName: "s4hana",
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/appenmaier/s4hana/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: {
        light: "default",
        dark: "dark",
      },
    },
    navbar: {
      title: "Startseite",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "documentation/introduction",
          position: "left",
          label: "Dokumentation",
        },
        {
          type: "doc",
          docId: "exercises/abap/abap-01",
          position: "left",
          label: "Übungsaufgaben",
        },
        {
          type: "doc",
          docId: "rap-cookbook/introduction",
          position: "left",
          label: "RAP Cookbook",
        },
        {
          type: "doc",
          docId: "additional-material/adt",
          position: "left",
          label: "Zusatzmaterial",
        },
        {
          href: "https://github.com/appenmaier/s4hana",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Appenmaier Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["abap"],
    },
  },
};

module.exports = config;
