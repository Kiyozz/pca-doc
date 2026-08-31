import type { ReactNode } from "react";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";
import styles from "./HomepageScreenshots.module.css";

export default function HomepageScreenshots(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <figure className={clsx("pca-reveal", styles.frame)}>
          <ThemedImage
            className={styles.shot}
            alt="The compilation page of PCA, with a list of Papyrus scripts"
            sources={{
              light: "/screenshots/light/1_compilation.png",
              dark: "/screenshots/dark/1_compilation.png",
            }}
          />
          <figcaption className={styles.caption}>
            The compilation page. It follows your system theme.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
