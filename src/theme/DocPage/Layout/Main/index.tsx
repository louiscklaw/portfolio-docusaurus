/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { useDocsSidebar } from "@docusaurus/theme-common";

import clsx from "clsx";
import styles from "./styles.module.css";
import type { Props } from "@theme/DocPage/Layout/Main";
import { Paper } from "@mui/material";

export default function DocPageLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  return (
    <>
      <Paper elevation={0} sx={{ width: "100%", padding: "5rem" }}>
        {children}
      </Paper>
    </>
  );
}
