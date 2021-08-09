import React from "react";
import Link from "@docusaurus/Link";
import { Box, Grid } from "@material-ui/core";

import { project_thumbnails } from "../../theme/project_thumbnails";
import { FiArrowRightCircle } from "react-icons/fi";
import { THEME_WHITE } from "../../theme/styles/colors";

export default function ProjectThumbnail({ doc }) {
  let [project_thumbnail_blur, setProjectThumbnailBlur] = React.useState(false);
  let title = project_thumbnails[doc.id] && project_thumbnails[doc.id].title;
  return (
    <>
      <div
        onMouseEnter={(e) => setProjectThumbnailBlur(true)}
        onMouseLeave={(e) => setProjectThumbnailBlur(false)}
        style={{
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${
            project_thumbnails[doc.id] && project_thumbnails[doc.id].thumbnail
          })`,
        }}
      >
        <Link isNavLink to={doc.path}>
          {project_thumbnail_blur ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Grid
                  container
                  flexFlow="column"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Box
                        style={{
                          color: THEME_WHITE,
                        }}
                      >
                        {title}
                      </Box>
                      <Box
                        mt={"1rem"}
                        style={{ color: THEME_WHITE, textAlign: "center" }}
                      >
                        <FiArrowRightCircle size={"2rem"} />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </>
          )}
        </Link>
      </div>
    </>
  );
}
