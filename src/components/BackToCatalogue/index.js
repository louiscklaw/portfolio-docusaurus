import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";

import { THEME_ACCENT_COLOR, THEME_WHITE } from "../../theme/styles/colors";

export default function BackToCatalogue({ to, children }) {
  return (
    <>
      <Link isNavLink to={to} style={{ color: THEME_ACCENT_COLOR }}>
        {translate({ message: "back to catalogue" })}
      </Link>
    </>
  );
}
