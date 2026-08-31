import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  to: string;
  icon: ReactNode;
  description: ReactNode;
};

/* 24x24, stroked with currentColor: they inherit the gradient tile's white */
const icon = (paths: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths}
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: "Set up in four steps",
    to: "/docs/introduction/installation#first-launch",
    icon: icon(
      <>
        <path d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-1.2-6.8L19 5M3 21l9-9m.2-5.8L11 5" />
      </>,
    ),
    description: (
      <>
        A wizard runs on first launch: pick your game, point at its folder, and
        PCA finds the compiler on its own.
      </>
    ),
  },
  {
    title: "Creation Kit report",
    to: "/docs/getting-started/creation-kit",
    icon: icon(
      <>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </>,
    ),
    description: (
      <>
        A missing kit, an unextracted archive, sources in the wrong folder — PCA
        names the problem, and most of the time offers the button that fixes it.
      </>
    ),
  },
  {
    title: "Drop, then Start",
    to: "/docs/getting-started/compilation",
    icon: icon(
      <>
        <path d="M12 3v12" />
        <path d="m8 11 4 4 4-4" />
        <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
      </>,
    ),
    description: (
      <>
        Drag your <code>.psc</code> files in and press Start. Imports, flag file
        and output folder are worked out for you, 15 scripts at a time.
      </>
    ),
  },
  {
    title: "Groups and recent files",
    to: "/docs/basic-features/groups",
    icon: icon(
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>,
    ),
    description: (
      <>
        The scripts you compile all day, saved under a name and loaded in one
        click. The last 30 are kept whether you save them or not.
      </>
    ),
  },
  {
    title: "Papyrus namespaces",
    to: "/docs/advanced-features/namespaces",
    icon: icon(
      <>
        <path d="M4 3v14a2 2 0 0 0 2 2h4" />
        <path d="M4 10h6" />
        <rect x="12" y="3" width="8" height="5" rx="1" />
        <rect x="12" y="15" width="8" height="5" rx="1" />
      </>,
    ),
    description: (
      <>
        Fallout 4 and Starfield keep their scripts in folders. PCA compiles them
        where they belong, and writes the <code>.pex</code> back in place.
      </>
    ),
  },
  {
    title: "Nothing personal shipped",
    to: "/docs/advanced-features/anonymization",
    icon: icon(
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>,
    ),
    description: (
      <>
        The compiler stamps your user name, computer name and full path into
        every <code>.pex</code>. PCA strips them before you upload the mod.
      </>
    ),
  },
];

function Feature({ title, description, icon, to }: FeatureItem) {
  return (
    <li className={clsx("pca-reveal", styles.card)}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.cardTitle}>
        <Link to={to}>{title}</Link>
      </h3>
      <p className={styles.cardText}>{description}</p>
    </li>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={clsx("pca-reveal", styles.title)}>
          Everything the command line makes hard
        </h2>
        <p className={clsx("pca-reveal", styles.subtitle)}>
          PCA is a front end for <code>PapyrusCompiler.exe</code>, the compiler
          the Creation Kit ships. It does the parts you would otherwise type out
          every time.
        </p>
        <ul className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </ul>
      </div>
    </section>
  );
}
