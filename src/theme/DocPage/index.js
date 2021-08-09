/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useCallback } from "react";
import { MDXProvider } from "@mdx-js/react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import renderRoutes from "@docusaurus/renderRoutes";
import Layout from "@theme/Layout";
import DocSidebar from "@theme/DocSidebar";
import MDXComponents from "@theme/MDXComponents";
import NotFound from "@theme/NotFound";
import IconArrow from "@theme/IconArrow";
import BackToTopButton from "@theme/BackToTopButton";
import { matchPath } from "@docusaurus/router";
import { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import styles from "./styles.module.css";
import { ThemeClassNames, docVersionSearchTag } from "@docusaurus/theme-common";

import "./customize.module.css";

function DocPageContent({ currentDocRoute, versionMetadata, children }) {
  const { isClient } = useDocusaurusContext();
  const { pluginId, version } = versionMetadata;
  const sidebarName = currentDocRoute.sidebar;
  const sidebar = sidebarName
    ? versionMetadata.docsSidebars[sidebarName]
    : undefined;
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer(!hiddenSidebarContainer);
  }, [hiddenSidebar]);
  return (
    <Layout
      key={isClient}
      wrapperClassName={ThemeClassNames.wrapper.docPages}
      pageClassName={ThemeClassNames.page.docPage}
      searchMetadatas={{
        version,
        tag: docVersionSearchTag(pluginId, version),
      }}
    >
      <div className={styles.docPage}>
        <BackToTopButton />

        <main>
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </main>
      </div>
    </Layout>
  );
}

function DocPage(props) {
  const {
    route: { routes: docRoutes },
    versionMetadata,
    location,
  } = props;
  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute)
  );

  if (!currentDocRoute) {
    return <NotFound {...props} />;
  }

  return (
    <>
      <DocPageContent
        currentDocRoute={currentDocRoute}
        versionMetadata={versionMetadata}
      >
        {renderRoutes(docRoutes, {
          versionMetadata,
        })}
      </DocPageContent>
    </>
  );
}

export default DocPage;
