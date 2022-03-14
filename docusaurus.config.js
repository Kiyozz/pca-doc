// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const env = require("./env");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PCA",
  tagline: "Your tool to compile papyrus code",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Kiyozz", // Usually your GitHub org/user name.
  projectName: "PCA", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: env.githubDocLink,
        },
        blog: {
          routeBasePath: "/changelogs",
          blogTitle: "Changelogs",
          blogDescription: "PCA changelogs",
          blogSidebarTitle: "Versions",
          showReadingTime: false,
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "PCA",
        logo: {
          alt: "PCA logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction/installation",
            position: "left",
            label: "Docs",
          },
          {
            to: "changelogs",
            label: "Changelogs",
          },
          {
            href: env.nexusModsSELink,
            label: "Download",
            position: "right",
          },
          {
            href: env.githubLink,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Installation",
                to: "/docs/introduction/installation",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Nexus mods SE",
                href: env.nexusModsSELink,
              },
              {
                label: "Nexus mods LE",
                href: env.nexusModsLELink,
              },
              {
                label: "Help",
                to: "/docs/support",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "PCA GitHub",
                href: env.githubLink,
              },
              {
                label: "Documentation Github",
                href: env.githubDocLink,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wk. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
