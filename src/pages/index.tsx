import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures/HomepageFeatures";
import { nexusModsSELink } from "../../env";
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
          <Link
            className={clsx(
              "button button--primary text--white button--lg",
              styles.ml4,
            )}
            to={nexusModsSELink}
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
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
