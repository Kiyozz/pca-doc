---
sidebar_position: 3
---

# Anonymization

## Description

The Papyrus compiler writes three things into the header of every `.pex` it produces:

- the full path of the source script;
- your Windows user name;
- your computer name.

All three are readable by anyone who opens the file. Shipping a mod means shipping them.

PCA replaces them with random strings **of the very same lengths**, once the compilation succeeded.

Nothing else is touched: the compilation time and every byte of the compiled code are left alone, and the `.pex` keeps its size.
Skyrim, Fallout 4 and Starfield alike, and whichever compiler PCA is pointed at.

## Setting

`anonymize compiled scripts`, in the compilation settings. **On by default**, including on an existing configuration, and switchable off.

## When it fails

The compilation stays a **success** — the script was compiled after all — and the reason is raised in its [log entry](../basic-features/compilation-logs).
