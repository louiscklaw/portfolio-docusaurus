import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";

import { THEME_ACCENT_COLOR, THEME_WHITE } from "../../theme/styles/colors";
import { ViewPortMeasureContext } from "../../theme/ViewPortMeasureContext";

export default function BackToCatalogue({ to, children }) {
  let { xl_up, md_up } = React.useContext(ViewPortMeasureContext);

  return (
    <>
      <Link
        isNavLink
        to={to}
        style={{ color: xl_up || md_up ? THEME_ACCENT_COLOR : THEME_WHITE }}
      >
        {translate({ message: "back to catalogue" })}
      </Link>
    </>
  );
}
