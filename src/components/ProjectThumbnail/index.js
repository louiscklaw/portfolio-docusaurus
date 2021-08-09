import React from "react";
import Link from "@docusaurus/Link";

import { index_thumbnails } from "../../theme/index_thumbnails";

export default function ProjectThumbnail({ doc }) {
  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${index_thumbnails[doc.id]})`,
        }}
      >
        <Link isNavLink to={doc.path}>
          {doc.id}
        </Link>
      </div>
    </>
  );
}
