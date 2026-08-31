const nexusModsLELink = "https://www.nexusmods.com/skyrim/mods/96339";
const nexusModsSELink =
  "https://www.nexusmods.com/skyrimspecialedition/mods/23852";
const nexusModsFO4Link = "https://www.nexusmods.com/fallout4/mods/108553";
const nexusModsSFLink = "https://www.nexusmods.com/starfield/mods/18106";
const githubLink = "https://github.com/Kiyozz/papyrus-compiler-app";
const githubDocLink = "https://github.com/Kiyozz/pca-doc";
const documentationLink = "https://pca.kiyozz.com";
const telemetryLink = "https://telemetry.pca.kiyozz.com";
const downloadPageLink = "/download";

// One entry per supported game, each one pointing at the NexusMods page of
// that game. PCA still ships a single executable: the pages carry the same
// build, they are only how each game's players find it.
//
// Skyrim VR has no page of its own: it runs on the Skyrim SE build, and its
// players download it from the SE page.
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
    href: nexusModsLELink,
    anchor: "skyrim-legendary-edition",
  },
  { label: "Skyrim VR", href: nexusModsSELink, anchor: "skyrim-vr" },
  { label: "Fallout 4", href: nexusModsFO4Link, anchor: "fallout-4" },
  { label: "Starfield", href: nexusModsSFLink, anchor: "starfield" },
];

module.exports = {
  nexusModsSELink,
  nexusModsLELink,
  nexusModsFO4Link,
  nexusModsSFLink,
  githubDocLink,
  githubLink,
  documentationLink,
  telemetryLink,
  downloadPageLink,
  downloads,
};
