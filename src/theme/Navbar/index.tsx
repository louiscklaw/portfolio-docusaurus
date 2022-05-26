/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";

export default function Navbar(): JSX.Element {
  return (
    <div style={{ height: 0, display: "none" }}>
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>
    </div>
  );
}
