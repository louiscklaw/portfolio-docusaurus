/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import Grid from "@material-ui/core/Grid";

const THEME_ACCENT_COLOR = "#2C3E50";
const THEME_BACKGROUND_COLOR = "#555555";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <main>
          <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="left"
            style={{
              height: "100vh",
            }}
          >
            {context.globalData[
              "docusaurus-plugin-content-docs"
            ].default.versions[0].docs.map((doc, index) => (
              <Grid item xs={4} md={3} key={index} style={{ height: "25%" }}>
                <div>
                  xs=2
                  <Link isNavLink to={doc.path}>
                    {doc.id}
                  </Link>
                </div>
              </Grid>
            ))}

            {Array.from(Array(2)).map((_, index) => (
              <Grid
                item
                xs={4}
                md={3}
                key={index}
                style={{
                  height: "25%",
                  backgroundColor: THEME_BACKGROUND_COLOR,
                }}
              >
                <div>xs=2</div>
              </Grid>
            ))}
          </Grid>
        </main>
      </Layout>
    </>
  );
}
