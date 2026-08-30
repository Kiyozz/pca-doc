---
sidebar_position: 1
---

# Configuration

On the very first launch, the [setup wizard](../introduction/installation#first-launch) walks you through the essentials.
Everything it asks — and more — lives in the settings page, reachable at any time.

Every change is saved as you type. The [Creation Kit report](creation-kit) refreshes with it.

## Game

| Setting | What it does | Default |
| --- | --- | --- |
| `game` | The game you compile for: Skyrim SE, Skyrim LE, Skyrim VR, Fallout 4 or Starfield | Skyrim SE |
| `game folder` | The folder holding the game executable | _empty_ |
| `papyrus compiler` | The path to `PapyrusCompiler.exe` | Filled in from the game folder |

The Creation Kit installs the compiler in the `Papyrus Compiler` folder of the game — `Tools\Papyrus Compiler` for Starfield.
PCA fills the path in on its own once the game folder is right.

Below those fields, the [Creation Kit report](creation-kit) tells you what is still missing.

## Compilation

| Setting | What it does | Default |
| --- | --- | --- |
| `concurrent scripts` | How many scripts are compiled at the same time | `15` |
| `output folder` | Where the compiled `.pex` are written | _empty_ — the game's `Data\Scripts` |
| `anonymize compiled scripts` | Strips your path, user name and computer name from the `.pex` header | On |

Lower `concurrent scripts` if your machine stalls when a compilation starts.

With a [namespace](../advanced-features/namespaces), the `.pex` still goes into its namespace subfolder of the output folder.

Anonymization is detailed in [Anonymization](../advanced-features/anonymization).

## Preferences

| Setting | What it does | Default |
| --- | --- | --- |
| `theme` | System, light or dark | System |
| `language` | English or French | Follows your system |
| `log level` | `error`, `warn`, `info` or `debug` | `info` |

Set the log level to `debug` before reproducing a bug, see [Support](../support).

## Mod Organizer 2

| Setting | What it does | Default |
| --- | --- | --- |
| `enable` | Nothing since 5.9.0 — PCA only warns while it is on | Off |

The integration was removed. Refer to [MO2](mo2).

## Usage data

| Setting | What it does | Default |
| --- | --- | --- |
| `enable` | Sends anonymous data about how you use PCA | On |

Support PCA authors by providing anonymous data about how you use PCA.

PCA collects telemetry data for the purpose of analyzing used functionality and improving relevant features.

Examples of collected data include group and compilation data, errors, and timestamps of various app events.

**The collected data is public**, and browsable at [telemetry.pca.kiyozz.com](https://telemetry.pca.kiyozz.com/).

## About

Shows the version you are running, and lets you **run the setup wizard again**.

## Several game instances

If you juggle several instances or several games, PCA can be started with the whole configuration on the command line.
Refer to [Application Parameters](../advanced-features/application-parameters).
