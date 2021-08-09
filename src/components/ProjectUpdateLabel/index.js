import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { FiCalendar, FiTag } from "react-icons/fi";

import { THEME_ACCENT_COLOR, THEME_WHITE } from "../../theme/styles/colors";
import { Box } from "@material-ui/core";

export default function ProjectUpdateLabel({ children }) {
  return (
    <>
      <Box>
        <Box component="span">
          <FiCalendar size="1rem" style={{ marginRight: "0.5rem" }} />
        </Box>
        <Box component="span">
          {translate({ message: "last update" })}:{children}
        </Box>
      </Box>
    </>
  );
}
