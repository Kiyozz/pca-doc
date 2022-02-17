import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Performance",
    description: (
      <>Startup time is really fast. No need to load any plugins first.</>
    ),
  },
  {
    title: "Compilation",
    description: (
      <>PCA lets you focus on your scripts. Compilation should be easy.</>
    ),
  },
  {
    title: "Powered by Electron",
    description: (
      <>
        PCA is built using <Link to="https://electronjs.org">Electron</Link>. An
        open source tool to create desktop applications.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
