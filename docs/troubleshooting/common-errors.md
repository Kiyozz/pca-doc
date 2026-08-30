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

Extract them into `Data\Source\Scripts` for Skyrim SE, AE and VR, into `Data\Scripts\Source` for Skyrim LE and Fallout 4. See [Script extenders](../introduction/installation#script-extenders).

PCA raises this as a warning in the [Creation Kit report](../getting-started/creation-kit#the-script-extender-has-no-source-scripts).

## The wrong script was compiled

Fixed in 5.9.0: the folder of the script you picked is now the working directory and the first import, so a namesake found in the game sources no longer wins.

## Nothing compiles for Starfield

Starfield is supported since 5.9.0. On an older PCA, it is not — update first.

Then check the [Creation Kit report](../getting-started/creation-kit): Starfield keeps its compiler in `Tools\Papyrus Compiler`, its sources in `Data\Scripts\Source`, and needs `Starfield_Papyrus_Flags.flg` selected as its flag file.
