import React from "react";
import Link from "@docusaurus/Link";

import { FiGithub } from "react-icons/fi";
import { THEME_WHITE } from "../../theme/styles/colors";
import { Box } from "@material-ui/core";

export default function GithubLink({ to, children }) {
  return (
    <>
      <Link isNavLink to={to} style={{ color: THEME_WHITE }}>
        {children}
        <FiGithub style={{ marginLeft: "0.1rem", paddingTop: "2px" }} />
      </Link>
    </>
  );
}
