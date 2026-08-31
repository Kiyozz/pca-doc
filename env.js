const nexusModsLELink = "https://www.nexusmods.com/skyrim/mods/96339";
const nexusModsSELink =
  "https://www.nexusmods.com/skyrimspecialedition/mods/23852";
const githubLink = "https://github.com/Kiyozz/papyrus-compiler-app";
const githubDocLink = "https://github.com/Kiyozz/pca-doc";
const documentationLink = "https://pca.kiyozz.com";
const telemetryLink = "https://telemetry.pca.kiyozz.com";
const downloadPageLink = "/download";

// One entry per supported game. They all point to the same NexusMods page for
// now: PCA ships a single executable, and the page is hosted under Skyrim SE.
// Give a game its own link here the day one exists.
//
// `anchor` is the heading id of that game on the download page. Keep both in
// sync: the home page links to those sections, and a typo would break the
// build.
const downloads = [
  {
    label: "Skyrim SE / AE",
    href: nexusModsSELink,
    anchor: "skyrim-special-edition-and-anniversary-edition",
  },
  {
    label: "Skyrim LE",
    href: nexusModsSELink,
    anchor: "skyrim-legendary-edition",
  },
  { label: "Skyrim VR", href: nexusModsSELink, anchor: "skyrim-vr" },
  { label: "Fallout 4", href: nexusModsSELink, anchor: "fallout-4" },
  { label: "Starfield", href: nexusModsSELink, anchor: "starfield" },
];

module.exports = {
  nexusModsSELink,
  nexusModsLELink,
  githubDocLink,
  githubLink,
  documentationLink,
  telemetryLink,
  downloadPageLink,
  downloads,
};
