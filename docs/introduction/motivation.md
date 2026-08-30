---
sidebar_position: 2
---

# Motivation

## The problem

Papyrus is compiled by `PapyrusCompiler.exe`, a command line tool the Creation Kit ships.

Nothing about it is pleasant. Called by hand, it needs the right flag file, the right import folders in the right order, and an output path, all spelled out every time. Called through the Creation Kit, it hides behind a window that was never meant for iterating on scripts: no drag and drop, no list you can keep between sessions, and a failure that tells you very little about why.

Modding is not one script compiled once. It is the same handful of scripts, compiled again and again, all day.

## The answer

PCA is that command line, wrapped in something you actually want to use.

Drop your `.psc` files in, press Start. PCA works out the imports, the flag file, the namespace and the output folder from the game you selected, and compiles everything at once rather than one script after another.

When it cannot compile, it says which of the several possible reasons applies — and, most of the time, offers the button that fixes it.

## Principles

- **User experience first.** Every feature is judged on whether it saves you a round trip.
- **Say what is wrong.** A failed compilation should never leave you guessing. PCA checks your setup up front and names the problem.
- **Stay out of the way.** No plugin to load, no project to create. PCA starts fast and forgets nothing between sessions.

## Who makes it

Development started in 2018. PCA is created by Wk, who goes by [Kiyozz](https://github.com/Kiyozz) on GitHub and [WushuLate](https://www.nexusmods.com/users/10659062) on NexusMods.

It is free, [open source](https://github.com/Kiyozz/papyrus-compiler-app), and the [usage data it collects](../getting-started/configuration#usage-data) is public.
