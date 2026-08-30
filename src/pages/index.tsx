import type { ReactNode } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import HomepageFeatures from "../components/HomepageFeatures/HomepageFeatures";
import HomepageScreenshots from "@site/src/components/HomepageScreenshots/HomepageScreenshots";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroBg} />
      <div className={clsx("container", styles.heroContent)}>
        <h1 className={clsx("hero__title", styles.heroTitle)}>
          <img
            className={styles.heroAppIcon}
            src="/img/logo.svg"
            alt="PCA logo"
          />
          <span>{siteConfig.title}</span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/installation"
          >
            Getting started
          </Link>
          <DownloadButton className={styles.ml4} />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={`Documentation site for ${siteConfig.title}`}
      wrapperClassName={styles.wrapper}
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <HomepageScreenshots />
      </main>
    </Layout>
  );
}
