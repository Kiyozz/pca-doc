---
sidebar_position: 3
---

# Compilation logs

## Description

The logs hold **what the compiler said about the run you just launched**, one entry per script, output included.

Open them with the **Logs** button at the bottom of the left sidebar.

:::note
The logs cover **one run**, not a history. Starting a new compilation, or emptying the script list, clears them.
:::

## The button tells you how it went

Without opening anything, its colour reports the outcome of the last run:

| Colour | Meaning |
| --- | --- |
| _Green_ | Every script compiled |
| _Red_ | At least one failed |
| Neutral | Nothing has run yet, or a run is in progress |

## What an entry holds

- The script, with a **Success** or **Failure** badge — the result of *this* run.
- The **compiler output**, verbatim, line by line. This is where the actual error message is.
- A button to **open the folder the `.pex` was written to**, [namespaces](../advanced-features/namespaces) included. Greyed out when nothing was produced.
- A button to **copy** the entry — the script, its path and the whole output — ready to paste into a bug report.
- A button to **delete** that entry, when you want the failures alone in front of you.

## Finding the failure

Two switches at the top of the dialog:

- **Errors only** hides everything that compiled. On a run of forty scripts where one broke, this is the fastest way to it. When nothing failed, it says so.
- **Full path** replaces each script name with its full path. Useful when two mods ship a script with the same name and you need to know which one ran.

**Clear** at the bottom empties the logs without waiting for the next run.

## Reporting a bug

The copy button is the point of the exercise: it produces the script, its path and the compiler output in one paste.

For a bug in PCA itself rather than in your script, add the log file too — see [Support](../support).
