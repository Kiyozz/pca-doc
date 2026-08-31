import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./GameIcon.module.css";

/* The three artworks come in three styles — a filled emblem, a line drawing,
   a stroked ring — and two file formats. Painting them as masks in
   currentColor is what makes them read as one set, and lets them follow the
   theme and the hover state like any other glyph.

   Keyed by the download's `anchor`, the id `env.js` already keeps stable.
   Every Skyrim shares the one emblem: they are the same game. */
const classNames: Record<string, string> = {
  "skyrim-special-edition-and-anniversary-edition": styles.skyrim,
  "skyrim-legendary-edition": styles.skyrim,
  "skyrim-vr": styles.skyrim,
  "fallout-4": styles.fallout4,
  starfield: styles.starfield,
};

export default function GameIcon({
  anchor,
  className,
}: {
  anchor: string;
  className?: string;
}): ReactNode {
  const icon = classNames[anchor];

  if (icon === undefined) {
    return null;
  }

  return (
    <span aria-hidden="true" className={clsx(styles.icon, icon, className)} />
  );
}
