import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import Grid from "@material-ui/core/Grid";
import ProjectThumbnail from "../components/ProjectThumbnail";

import WorkInProgressTile from "../components/WorkInProgressTile";

const THEME_BACKGROUND_COLOR = "#555555";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [list_projects, setListProjects] = React.useState([]);
  const [fill_tile, setFillTile] = React.useState(0);
  React.useEffect(() => {
    let proj_list = context.globalData[
      "docusaurus-plugin-content-docs"
    ].default.versions[0].docs.filter(
      (doc) => !["ABOUT", "CREDITS", "_TEST"].includes(doc.id)
    );
    setListProjects(proj_list);

    const round_up_to = Math.ceil(proj_list.length / 4) * 4;
    const missing = round_up_to - proj_list.length;
    setFillTile(missing);
    console.log("missing", missing);
    console.log("proj_list.length", proj_list.length);
  }, context);

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
            style={{ height: "100vh" }}
          >
            {list_projects.map((doc, index) => (
              <Grid item xs={4} md={3} key={index} style={{ height: "25%" }}>
                <ProjectThumbnail doc={doc} />
              </Grid>
            ))}

            {Array.from(Array(fill_tile)).map((_, index) => (
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
                <WorkInProgressTile />
              </Grid>
            ))}
          </Grid>
        </main>
      </Layout>
    </>
  );
}
