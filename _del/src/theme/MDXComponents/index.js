/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { isValidElement } from "react";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import Details from "@theme/Details";
import { Typography } from "@material-ui/core";

import { ELE_SHADOW } from "../../theme/styles/colors";

// https://mdxjs.com/table-of-components

const MDXComponents = {
  code: (props) => {
    const { children } = props; // For retrocompatibility purposes (pretty rare use case)
    // See https://github.com/facebook/docusaurus/pull/1584

    if (isValidElement(children)) {
      return children;
    }

    return !children.includes("\n") ? (
      <code {...props} />
    ) : (
      <CodeBlock {...props} />
    );
  },
  a: (props) => <Link {...props} />,
  pre: (props) => {
    const { children } = props; // See comment for `code` above

    if (isValidElement(children?.props?.children)) {
      return children?.props.children;
    }

    return (
      <CodeBlock
        {...(isValidElement(children) ? children?.props : { ...props })}
      />
    );
  },
  details: (props) => {
    const items = React.Children.toArray(props.children); // Split summary item from the rest to pass it as a separate prop to the Detais theme component

    const summary = items.find((item) => item?.props?.mdxType === "summary");
    const children = <>{items.filter((item) => item !== summary)}</>;
    return (
      <Details {...props} summary={summary}>
        {children}
      </Details>
    );
  },
  h1: Heading("h1"),
  h2: Heading("h2"),
  h3: Heading("h3"),
  h4: Heading("h4"),
  h5: Heading("h5"),
  h6: Heading("h6"),
  img: (props) => (
    <div style={{ textAlign: "center" }}>
      <img
        {...props}
        style={{
          borderRadius: "0.5rem",
          ...ELE_SHADOW,
        }}
      />
    </div>
  ),
};
export default MDXComponents;
