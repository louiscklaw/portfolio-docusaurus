import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button, createTheme, ThemeProvider, Grid, useTheme } from "@mui/material";
import Layout from "@theme/Layout";
import React from "react";
import ProjectThumbnail from "../components/ProjectThumbnail";
import WorkInProgressTile from "../components/WorkInProgressTile";
import mui_theme from "../const/muiTheme";

const THEME_BACKGROUND_COLOR = "#555555";

export function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [list_projects, setListProjects] = React.useState([]);
  const [fill_tile, setFillTile] = React.useState(0);
  React.useEffect(() => {
    let proj_list = context.globalData[
      "docusaurus-plugin-content-docs"
    ].default.versions[0].docs.filter(doc => !["ABOUT", "CREDITS", "_TEST"].includes(doc.id));
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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const context = useDocusaurusContext();
  const { palette } = useTheme();

  const [list_projects, setListProjects] = React.useState([]);
  const [fill_tile, setFillTile] = React.useState(0);
  React.useEffect(() => {
    let proj_list = context.globalData[
      "docusaurus-plugin-content-docs"
    ].default.versions[0].docs.filter(doc => !["ABOUT", "CREDITS", "_TEST"].includes(doc.id));
    setListProjects(proj_list);

    const round_up_to = Math.ceil(proj_list.length / 4) * 4;
    const missing = round_up_to - proj_list.length;
    setFillTile(missing);
  }, context);

  return (
    <>
      <Grid container sx={{ width: "100%", backgroundColor: palette.background.paper }}>
        {list_projects.map((doc, index) => (
          <ProjectThumbnail doc={doc} />
        ))}
      </Grid>
    </>
  );
}

export default function Helloworld() {
  const { siteConfig } = useDocusaurusContext();
  const theme = createTheme(mui_theme);
  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main></main>
      </Layout>
    </ThemeProvider>
  );
}
