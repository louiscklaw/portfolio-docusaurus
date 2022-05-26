import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "@theme/Layout";
import React from "react";

import MuiTheme from "../MuiTheme";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <div className="container"></div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
