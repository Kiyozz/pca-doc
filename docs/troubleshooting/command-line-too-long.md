# Command line is too long

Windows caps the length of a command line. The Papyrus compiler is called with one import folder per argument, so a long list of imports can hit that cap.

## Since 5.9.0

Two changes make it far less likely:

- **PCA's MO2 integration was removed.** It used to pass every mod folder to the compiler, which is what blew past the limit in the first place. Run PCA [through MO2](../getting-started/mo2) instead: MO2 gives it a single, already merged `Data` folder.
- **Fallout 4 imports were reduced** to the three roots the game actually uses, instead of every subfolder found under them. Refer to [Papyrus namespaces](../advanced-features/namespaces).

## Still hitting it

- Make sure the `mo2` option is off in the settings — it does nothing but warn.
- Move the game, or your scripts, to a shorter path. Every import folder carries its full path.
- Share a [debug log](../support) with us.
