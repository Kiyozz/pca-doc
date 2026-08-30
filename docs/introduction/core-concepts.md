---
sidebar_position: 3
---

# Core Concepts

## What PCA does

PCA is a front end for the Papyrus compiler that comes with the Creation Kit. It does not compile anything itself — it works out how to call `PapyrusCompiler.exe` correctly, and calls it once per script, several at a time.

Five games are supported: **Skyrim SE, Skyrim LE, Skyrim VR, Fallout 4 and Starfield**. One executable covers all of them, the game is a setting.

## The vocabulary

Everything PCA does turns around five things. Set the first two and the rest follows.

| Concept | What it is |
| --- | --- |
| **Game** | Which game you compile for. It decides the compiler, the flag file, where the sources live and where the `.pex` goes. |
| **Game folder** | Where that game is installed. PCA reads it to find the compiler and the source scripts. |
| **Compiler** | `PapyrusCompiler.exe`, installed by the Creation Kit. PCA finds it from the game folder. |
| **Imports** | The folders the compiler searches when a script refers to another one. PCA builds the list: the folder of your script first, then the game's source roots. |
| **Output** | Where the compiled `.pex` is written. The game's `Data\Scripts` unless you say otherwise. |

## How a compilation goes

1. **You fill the list** — drag and drop, the search button, a [group](../basic-features/groups) or the [recent files](../basic-features/recent-files).
2. **PCA checks your setup.** The [Creation Kit report](../getting-started/creation-kit) blocks the run on an error, and warns on what is merely suspicious.
3. **Scripts compile in parallel**, `15` at a time by default.
4. **Each line reports back**, with a button to open the folder its `.pex` landed in.
5. **The run lands** in the [compilation logs](../basic-features/compilation-logs), with the compiler output of every script.

## Features

- [Drag and Drop](../getting-started/compilation#drag-and-drop) — the fastest way in
- [Setup wizard and Creation Kit report](../getting-started/creation-kit) — knows what is missing, and fixes most of it
- [Groups](../basic-features/groups) — a named list of scripts, added in one click
- [Recent files](../basic-features/recent-files) — what you compiled last time
- [Compilation logs](../basic-features/compilation-logs) — what the compiler said, script by script
- [Papyrus namespaces](../advanced-features/namespaces) — Fallout 4 and Starfield
- [Anonymization](../advanced-features/anonymization) — no personal path in the `.pex` you ship
- [Application parameters](../advanced-features/application-parameters) — one shortcut per game, or per MO2 instance
