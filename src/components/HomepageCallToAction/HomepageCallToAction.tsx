import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import DownloadButton from "../DownloadButton/DownloadButton";
import styles from "./HomepageCallToAction.module.css";

const docLinks = [
  { label: "Installation", to: "/docs/introduction/installation" },
  { label: "Creation Kit report", to: "/docs/getting-started/creation-kit" },
  { label: "Compilation", to: "/docs/getting-started/compilation" },
  { label: "Mod Organizer 2", to: "/docs/getting-started/mo2" },
  { label: "Vortex", to: "/docs/getting-started/vortex" },
  { label: "Common errors", to: "/docs/troubleshooting/common-errors" },
  { label: "Support", to: "/docs/support" },
  { label: "Changelogs", to: "/changelogs" },
];

export default function HomepageCallToAction(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={clsx("pca-reveal", styles.panel)}>
          <h2 className={styles.title}>Ready to compile?</h2>
          <p className={styles.text}>
            Free, open source, and the same executable for every supported game.
          </p>
          <div className={styles.actions}>
            <DownloadButton variant="inverse" direction="up" />
            <Link className={styles.ghost} to="/docs/introduction/installation">
              Read the installation guide
            </Link>
          </div>
        </div>

        <nav aria-label="Documentation" className={styles.links}>
          {docLinks.map((link) => (
            <Link key={link.to} className={styles.link} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
