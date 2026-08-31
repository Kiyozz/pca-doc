import Link from "@docusaurus/Link";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { downloadPageLink, downloads } from "../../../env";
import styles from "./DownloadButton.module.css";

export default function DownloadButton({
  className,
  variant = "primary",
  direction = "down",
}: {
  className?: string;
  /* `inverse` is for the dark panels, where a blue button would sink into
     the gradient behind it */
  variant?: "primary" | "inverse";
  /* near the bottom of the page a menu opening downwards lands off screen */
  direction?: "down" | "up";
}): ReactNode {
  const [isOpen, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // the menu is dismissed the way any menu is: clicking away, or Escape
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent) => {
      if (!container.current?.contains(event.target as Node)) {
        close();
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <div
      ref={container}
      className={clsx(
        "dropdown",
        "dropdown--right",
        isOpen && "dropdown--show",
        styles.dropdown,
        direction === "up" && styles.up,
        className,
      )}
    >
      <button
        type="button"
        className={clsx(
          "button button--lg",
          variant === "primary" ? styles.trigger : "button--secondary",
        )}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setOpen((open) => !open)}
      >
        Download
        <span aria-hidden="true" className={styles.caret} />
      </button>
      <ul className="dropdown__menu" role="menu">
        <li role="none">
          <Link
            className="dropdown__link"
            to={downloadPageLink}
            role="menuitem"
            onClick={close}
          >
            All games
          </Link>
        </li>
        {downloads.map((download) => (
          <li key={download.label} role="none">
            <a
              className="dropdown__link"
              href={download.href}
              role="menuitem"
              onClick={close}
            >
              {download.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
