---
sidebar_position: 1
---

# Papyrus namespaces

## Description

Fallout 4 and Starfield let a script declare a namespace in its header:

```papyrus
Scriptname MyMod01:MyScript extends Quest
```

The namespace is the part before the last colon, `MyMod01` here.
It maps to a folder: the script lives in `MyMod01\MyScript.psc`, and its compiled form belongs in `MyMod01\MyScript.pex`.

PCA reads that header and handles it for you:

- the namespace is passed to the compiler along with the script name;
- the **namespace root folder** is imported, not the folder the script sits in;
- the `.pex` is written into its namespace subfolder of the output folder.

Nothing to configure. Skyrim has no namespaces and is unaffected.

## Fallout 4 imports

PCA imports the three roots the game actually uses:

- `Scripts\Source`
- `Scripts\Source\Base`
- `Scripts\Source\User`

Their subfolders are namespace folders, not import roots — the compiler walks down to them on its own, so PCA does not pass them.

Keeping the list this short is also what keeps the compiler command line well under the [Windows length limit](../troubleshooting/command-line-too-long).

## Starfield imports

Starfield keeps every script under `Scripts\Source`, and its subfolders are namespaces, so that folder is the only import root.
