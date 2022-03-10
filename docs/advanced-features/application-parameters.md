---
sidebar_position: 2
---

# Application Parameters

_I'm in love with the command line_

## Description

PCA has a feature called **Application Parameters**.

A parameter is a command line flag/arguments.

List of parameters:
- `--game-path`: set the game path inside the configuration.
- `--game-type`: set the game.
  Valid entries: `'Skyrim SE'`, `'Skyrim LE'`, `'Skyrim VR'`, `'Fallout 4'`.
- `--compiler-path`: set the compiler path inside the configuration (path of `PapyrusCompiler.exe`).
- `--output-path`: set the output path, this is where you're compiled files (`.pex`) will go.
- `--debug`: enable debug mode. Will output more logs in the console/log file.

## Usage

### Classic

Create a new file `PCA SE-with-args.cmd` with:

```shell
"./PCA SE.exe" --game-path "[...]\Skyrim Special Edition" --game-type "Skyrim SE"
```

:::note
- Skyrim LE, use `./PCA LE.exe` and `--game-type "Skyrim LE"` instead.
- Fallout 4, use `--game-type "Fallout 4"` instead.
:::

Open PCA by executing this new file.

### MO2

Create a MO2 executable:

- Target: `PCA SE.exe`
- Arguments: `--game-path "[...]\Skyrim Special Edition" --game-type "Skyrim SE"`
