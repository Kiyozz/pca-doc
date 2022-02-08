// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const nexusModsLELink = "https://www.nexusmods.com/skyrim/mods/96339";
const nexusModsSELink =
  "https://www.nexusmods.com/skyrimspecialedition/mods/23852";
const githubLink = "https://github.com/Kiyozz/papyrus-compiler-app";
const githubDocLink = "https://github.com/Kiyozz/pca-doc";

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
          editUrl: githubDocLink,
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
            type: "docsVersionDropdown",
            href: "/docs/introduction/installation",
          },
          {
            type: "doc",
            docId: "introduction/installation",
            position: "left",
            label: "Docs",
          },
          {
            href: nexusModsSELink,
            label: "Nexus mods",
            position: "right",
          },
          {
            href: githubLink,
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
                label: "Getting started",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Nexus mods SE",
                href: nexusModsSELink,
              },
              {
                label: "Nexus mods LE",
                href: nexusModsLELink,
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: githubLink,
              },
              {
                label: "Github documentation",
                href: githubDocLink,
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
