---
sidebar_position: 5
---

# Vortex

PCA needs no Vortex-specific setup. Configure it [the usual way](configuration) and compile.

The reason is that Vortex, unlike MO2, does not virtualize anything: deploying a mod puts its files in the game's real `Data` folder, as hardlinks. Everything is where the compiler expects it, so PCA — and the Creation Kit, and the game — see a mod's source scripts like any other file.

There are only two things to know.

## Deploy before you compile

A mod that has been installed but **not deployed** is not in `Data` yet. Its `.psc` do not exist as far as the compiler is concerned, and any script importing them fails with `unable to locate script`.

Vortex deploys on its own most of the time, and otherwise asks. Take the prompt before compiling, or hit **Deploy Mods** in Vortex.

The same goes the other way: after a **Purge**, the deployed files are gone until you deploy again.

## Send the compiled scripts to your mod

By default PCA writes the `.pex` into the game's `Data\Scripts`, next to the deployed files but not part of any mod. Two consequences:

- Vortex sees them as external changes and asks what to do with them on its next deployment;
- your compiled scripts are not in the mod you are building, so they are not packaged with it.

Point the `output folder` setting at the folder of your mod in the Vortex **staging folder** instead — Vortex shows where it is under Settings, in the Mods tab, and gives every mod its own subfolder in there — `<staging>\<your mod>\Scripts`, plus the [namespace](../advanced-features/namespaces) subfolder if your script declares one, which PCA appends for you.

The `.pex` then lands in the mod itself, gets deployed like the rest of it, and is picked up when you package the mod.

Refer to [Configuration](configuration#compilation) for the setting.

## Several games

Vortex switches between games. PCA has one game selected at a time, in its settings.

If you go back and forth, give each game its own shortcut with the configuration on the command line, rather than changing the settings every time. Refer to [Application Parameters](../advanced-features/application-parameters).
