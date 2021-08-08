import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import Grid from "@material-ui/core/Grid";

import { index_thumbnails } from "./index_thumbnails";

const THEME_BACKGROUND_COLOR = "#555555";

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
            ].default.versions[0].docs
              .filter((doc) => !["ABOUT", "CREDITS"].includes(doc.id))
              .map((doc, index) => (
                <Grid item xs={4} md={3} key={index} style={{ height: "25%" }}>
                  <div
                    style={{
                      height: "100%",
                      backgroundImage: `url("${index_thumbnails[doc.id]}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
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
