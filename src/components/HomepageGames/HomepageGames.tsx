import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import GameIcon from "../GameIcon/GameIcon";
import { downloadPageLink, downloads } from "@site/env";
import styles from "./HomepageGames.module.css";

export default function HomepageGames(): ReactNode {
  return (
    <section className={styles.games}>
      <div className="container">
        <h2 className={clsx("pca-reveal", styles.title)}>
          One app, five games
        </h2>
        <p className={clsx("pca-reveal", styles.subtitle)}>
          A single <code>PCA.exe</code> compiles for all of them. The game is a
          setting, changed whenever you want.
        </p>
        <ul className={styles.list}>
          {downloads.map((download) => (
            <li className="pca-reveal" key={download.label}>
              <Link
                className={styles.game}
                to={`${downloadPageLink}#${download.anchor}`}
              >
                <GameIcon anchor={download.anchor} className={styles.icon} />
                {download.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
