// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const env = require("./env");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const tagline = "Compile Papyrus scripts for Skyrim, Fallout 4 and Starfield.";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PCA",
  tagline,
  url: env.documentationLink,
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "Kiyozz", // Usually your GitHub org/user name.
  projectName: "PCA", // Usually your repo name.

  // Marks the document before the first paint, so the reveal styles never
  // apply to a browser that will not run the observer that clears them.
  //
  // An attribute, not a class: Docusaurus rewrites the class of <html> when
  // it hydrates, which silently dropped the flag and left every element
  // visible. It leaves data attributes alone - that is how its own
  // `data-theme` survives.
  headTags: [
    {
      tagName: "script",
      attributes: {},
      innerHTML: "document.documentElement.setAttribute('data-pca-js','')",
    },
  ],

  clientModules: [require.resolve("./src/clientModules/reveal.ts")],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  future: {
    v4: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: env.githubDocLink,
          lastVersion: "current",
          versions: {
            current: {
              label: "2026.2",
              path: "",
            },
            2022.1: {
              label: "2022.1",
              banner: "unmaintained",
            },
          },
        },
        blog: {
          routeBasePath: "/changelogs",
          blogTitle: "Changelogs",
          blogDescription: "PCA changelogs",
          blogSidebarTitle: "Versions",
          showReadingTime: false,
          postsPerPage: 1,
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
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
      image: "img/logo.svg",
      metadata: [
        {
          name: "keywords",
          content:
            "papyrus compiler, papyrus compiler app, pca, skyrim, fallout 4, starfield, creation kit, modding",
        },
      ],
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
            className: "navbar-icon--docs",
          },
          {
            to: "changelogs",
            label: "Changelogs",
            className: "navbar-icon--changelogs",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "dropdown",
            label: "Download",
            position: "right",
            className: "navbar-icon--download",
            items: [
              {
                to: env.downloadPageLink,
                label: "All games",
              },
              ...env.downloads.map((download) => ({
                href: download.href,
                label: download.label,
              })),
            ],
          },
          {
            href: env.githubLink,
            position: "right",
            className: "navbar-icon--github",
            "aria-label": "PCA on GitHub",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "PCA",
          src: "img/logo.svg",
          href: "/",
          width: 36,
          height: 36,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Installation",
                to: "/docs/introduction/installation",
              },
              {
                label: "Core concepts",
                to: "/docs/introduction/core-concepts",
              },
              {
                label: "Creation Kit report",
                to: "/docs/getting-started/creation-kit",
              },
              {
                label: "Compilation",
                to: "/docs/getting-started/compilation",
              },
              {
                label: "Common errors",
                to: "/docs/troubleshooting/common-errors",
              },
            ],
          },
          {
            title: "Download",
            // real links, one per game: a <select> would hide them from
            // crawlers and need JS to go anywhere
            items: [
              {
                label: "All games",
                to: env.downloadPageLink,
              },
              ...env.downloads.map((download) => ({
                label: download.label,
                href: download.href,
              })),
            ],
          },
          {
            title: "Mod managers",
            items: [
              {
                label: "Mod Organizer 2",
                to: "/docs/getting-started/mo2",
              },
              {
                label: "Vortex",
                to: "/docs/getting-started/vortex",
              },
              {
                label: "Application parameters",
                to: "/docs/advanced-features/application-parameters",
              },
              {
                label: "Namespaces",
                to: "/docs/advanced-features/namespaces",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "NexusMods",
                href: env.nexusModsSELink,
              },
              {
                label: "Support",
                to: "/docs/support",
              },
              {
                label: "Changelogs",
                to: "/changelogs",
              },
              {
                label: "Public telemetry",
                href: env.telemetryLink,
              },
              {
                label: "PCA on GitHub",
                href: env.githubLink,
              },
              {
                label: "Documentation on GitHub",
                href: env.githubDocLink,
              },
            ],
          },
        ],
        copyright: `<span class="footer__tagline">${tagline}</span>Copyright © ${new Date().getFullYear()} Wk. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
