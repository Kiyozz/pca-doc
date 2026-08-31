import type { ReactNode } from "react";
import clsx from "clsx";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import HomepageGames from "../components/HomepageGames/HomepageGames";
import HomepageFeatures from "../components/HomepageFeatures/HomepageFeatures";
import HomepageScreenshots from "../components/HomepageScreenshots/HomepageScreenshots";
import HomepageCallToAction from "../components/HomepageCallToAction/HomepageCallToAction";
import { githubLink } from "../../env";
import styles from "./index.module.css";

const description =
  "PCA compiles Papyrus scripts for Skyrim SE, AE, LE, VR, Fallout 4 and " +
  "Starfield. Drop your .psc files in and press Start: imports, flag file " +
  "and output folder are worked out for you. Free and open source.";

/* Google shows the app's name, price and rating from this. It repeats what
   the page already says — keep the two in step. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PCA — Papyrus Compiler App",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows",
  description,
  url: "https://pca.kiyozz.com",
  sameAs: [githubLink],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Person", name: "Wk" },
};

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroImage} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className="container">
        <img className={styles.heroLogo} src="/img/logo.svg" alt="" />
        <Link className={styles.badge} to="/changelogs/2026.2">
          <span className={styles.badgeTag}>2026.2</span>
          Starfield, namespaces and a setup wizard
        </Link>
        <h1 className={styles.heroTitle}>
          Compile Papyrus{" "}
          <span className={styles.gradientText}>
            without opening the Creation Kit
          </span>
        </h1>
        <p className={styles.heroSubtitle}>
          PCA is a Windows app for Skyrim SE, AE, LE, VR, Fallout 4 and
          Starfield. Drop your <code>.psc</code> files in and press Start — the
          imports, the flag file, the namespace and the output folder are worked
          out for you.
        </p>
        <div className={styles.buttons}>
          <DownloadButton />
          <Link
            className={clsx("button button--lg", styles.secondaryButton)}
            to="/docs/introduction/installation"
          >
            Get started
          </Link>
        </div>
        <ul className={styles.heroMeta}>
          <li>Free and open source</li>
          <li>Windows</li>
          <li>No account, no plugin to load</li>
        </ul>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Papyrus Compiler App"
      description={description}
      wrapperClassName={styles.wrapper}
    >
      <Head>
        <meta
          name="keywords"
          content="papyrus compiler, papyrus compiler app, pca, skyrim modding, skyrim special edition, fallout 4, starfield, creation kit"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageGames />
        <HomepageFeatures />
        <HomepageScreenshots />
        <HomepageCallToAction />
      </main>
    </Layout>
  );
}
