import Link from "@docusaurus/Link";
import { Box, Grid, useTheme } from "@material-ui/core";
import React from "react";
import { use100vh } from "react-div-100vh";
import { FiArrowRightCircle } from "react-icons/fi";
import { project_thumbnails } from "../../theme/project_thumbnails";

export default function ProjectThumbnail({ doc }) {
  const height_100vh = use100vh();
  const theme = useTheme();

  const [project_thumbnail_blur, setProjectThumbnailBlur] = React.useState(false);
  const title = project_thumbnails[doc.id] && project_thumbnails[doc.id].title;

  return (
    <Grid
      onMouseEnter={e => setProjectThumbnailBlur(true)}
      onMouseLeave={e => setProjectThumbnailBlur(false)}
      item
      xs={12}
      sm={2}
      sx={{
        height: { xs: height_100vh / 5, md: height_100vh / 4.5 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${
          project_thumbnails[doc.id] && project_thumbnails[doc.id].thumbnail
        })`,
      }}
    >
      <Link isNavLink to={doc.path}>
        {project_thumbnail_blur ? (
          <Box sx={{ width: "100%", height: "100%", backdropFilter: "blur(10px)" }}>
            <Grid
              container
              flexFlow="column"
              justifyContent="center"
              alignItems="center"
              style={{ height: "100%", width: "100%" }}
            >
              <Grid container item justifyContent="center" alignItems="center">
                <Grid item>
                  <Box style={{ color: theme.palette.primary.contrastText }}>{title}</Box>
                  <Box
                    mt="1rem"
                    style={{ color: theme.palette.primary.contrastText, textAlign: "center" }}
                  >
                    <FiArrowRightCircle size="2rem" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box sx={{ width: "100%", height: "100%" }}>tes 2</Box>
        )}
      </Link>
    </Grid>
  );
}
