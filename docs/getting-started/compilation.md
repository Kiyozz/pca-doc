---
sidebar_position: 3
---

# Compilation

_Using the **Groups** feature? Refer to [this](../basic-features/groups)_.

_Using a mod manager? Read [MO2](mo2) or [Vortex](vortex) first_.

## Add scripts

You have four ways to fill the list.

### Drag and Drop

Drop any `.psc` file into the app.

:::note
Drag and drop does not work when PCA is started as administrator.
:::

### Search for files

Use the search button at the top, then select the `.psc` files you want to compile.

### Recent files

Check the [Recent files](../basic-features/recent-files) feature.

### Groups

Check the [Groups](../basic-features/groups) feature.

## Any folder works

A script does not have to live in the game's source folder.
PCA imports the folder the script comes from, and compiles from there, so a script kept anywhere on your disk compiles fine.

That folder also comes **first** among the imports: if the game sources hold a script with the same name, the one you picked is the one compiled.

Scripts declaring a [namespace](../advanced-features/namespaces) (Fallout 4, Starfield) are handled too.

## Run

Press **Start**. The button is disabled while the [Creation Kit report](creation-kit) raises an error.

Warnings are shown too, but do not block anything. When both exist, the error comes first.

Each line of the list shows the result of the script, and once it succeeded, a button to **open the folder the `.pex` was written to**.

## Compilation logs

The **Logs** button, at the bottom of the left sidebar, holds the compiler output of the run you just launched, script by script. Its colour alone tells you whether everything compiled.

Refer to [Compilation logs](../basic-features/compilation-logs).

## Where the .pex goes

By default, into the game's `Data\Scripts` folder — plus the namespace subfolder when the script declares one.

Set an `output folder` in the settings to send them somewhere else. Refer to [Configuration](configuration#compilation).
