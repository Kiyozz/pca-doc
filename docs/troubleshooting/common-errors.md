# Common errors

## `unknown user flag hidden`

The Creation Kit is not fully installed. Refer to [Requirements](/docs/introduction/installation#requirements).

## `unable to locate script x`

You are most likely missing some mod's source files.

For Skyrim SE, AE and VR, it can also be an outdated copy of the game scripts left in `Data\Scripts\Source`, which PCA imports before `Data\Source\Scripts`. Refer to the [Creation Kit report](../getting-started/creation-kit#source-scripts-are-in-scriptssource-skyrim-se-ae-vr).

## `is not a known user-defined type`

1. You have a typo in your code;
2. You are missing some mod's source files.

## A script extender function fails to compile

SKSE or F4SE is installed, but its source scripts are not.

Copy the `Data\Scripts\Source` folder of the extender's archive into the game's `Data` folder, for every game. See [Script extenders](../introduction/installation#script-extenders).

With MO2, install the extender as a mod and launch PCA from MO2, see [MO2](../getting-started/mo2#script-extenders-and-root-builder).

PCA raises this as a warning in the [Creation Kit report](../getting-started/creation-kit#the-script-extenders-source-scripts-cannot-be-found).

## `Data\Scripts cannot be created (ENOENT)`

Raised when compiling from MO2 on a recent Windows 11 build with an MO2 older than usvfs 0.5.7.1: the folder only exists in MO2's virtual file system, and PCA could not see it.

Fixed in 5.9.3 (2026.4). Update PCA, or MO2.

## `RPC request timed out after 30000ms`

A compilation, a Creation Kit check, an archive extraction or a file dialog took more than 30 seconds.

Fixed in 5.9.3 (2026.4): none of them time out any more. Update PCA.

## The wrong script was compiled

Fixed in 5.9.0: the folder of the script you picked is now the working directory and the first import, so a namesake found in the game sources no longer wins.

## Nothing compiles for Starfield

Starfield is supported since 5.9.0. On an older PCA, it is not — update first.

Then check the [Creation Kit report](../getting-started/creation-kit): Starfield keeps its compiler in `Tools\Papyrus Compiler`, its sources in `Data\Scripts\Source`, and needs `Starfield_Papyrus_Flags.flg` selected as its flag file.
