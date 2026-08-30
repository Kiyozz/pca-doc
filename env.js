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
const downloads = [
  { label: "Skyrim SE / AE", href: nexusModsSELink },
  { label: "Skyrim LE", href: nexusModsSELink },
  { label: "Skyrim VR", href: nexusModsSELink },
  { label: "Fallout 4", href: nexusModsSELink },
  { label: "Starfield", href: nexusModsSELink },
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
