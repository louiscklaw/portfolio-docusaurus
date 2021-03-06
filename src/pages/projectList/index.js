import { Grid, Box, useTheme } from "@mui/material";
import Link from "@docusaurus/Link";

import Layout from "@theme/Layout";
import React from "react";
import { use100vh } from "react-div-100vh";
import { FiArrowRightCircle } from "react-icons/fi";

import allwinner_v3s_tryout_thumbnail from "../../../docs/assets/allwinner_v3s_tryout/thumbnail.jpg";
import appium_behave_notes_thumbnail from "../../../docs/assets/appium_behave_notes/thumbnail.jpg";
import daily_job_search_thumbnail from "../../../docs/assets/daily_job_search/thumbnail.jpg";
import hko_weather_bot_thumbnail from "../../../docs/assets/hko_weather_bot/thumbnail.png";
import hk_data_searcher_thumbnail from "../../../docs/assets/hk_data_searcher/thumbnail.png";
import {
  default as m5stack_playlist_thumbnail,
  default as m5stack_tryout_thumbnail,
} from "../../../docs/assets/m5stack_tryout/thumbnail.jpg";
import my_linux_toolbox_thumbnail from "../../../docs/assets/my_linux_toolbox/thumbnail.png";
import opencv_car_counting_tryout_thumbnail from "../../../docs/assets/opencv_car_counting_tryout/thumbnail.png";
import pet_projects_thumbnail from "../../../docs/assets/pet_projects/thumbnail.png";
import portfolio_tryout_thumbnail from "../../../docs/assets/portfolio_tryout/portfolio_thumbnail.png";
import printer_board_tryout_thumbnail from "../../../docs/assets/printer_board_tryout/thumbnail.png";
import rthk31_rthk32_linux_viewer_thumbnail from "../../../docs/assets/rthk31_rthk32_linux_viewer/thumbnail.png";
import slic3r_tryout_thumbnail from "../../../docs/assets/slic3r_tryout/thumbnail.png";
import tappy_tryout_thumbnail from "../../../docs/assets/tappy_tryout/thumbnail.png";
import tradingview_dashboard_thumbnail from "../../../docs/assets/tradingview_dashboard/thumbnail.png";
import traefik_tryout_thumbnail from "../../../docs/assets/traefik_tryout/thumbnail.webp";
import voron_tryout_thumbnail from "../../../docs/assets/voron_tryout/thumbnail.png";
import youtube_split_view_tryout_thumbnail from "../../../docs/assets/youtube_split_view_tryout/thumbnail.png";

function ProjectThumbnail({ title, thumbnail, target_path }) {
  const [project_thumbnail_blur, setProjectThumbnailBlur] = React.useState(false);
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={e => setProjectThumbnailBlur(true)}
        onMouseLeave={e => setProjectThumbnailBlur(false)}
      >
        <Link isNavLink to={target_path}>
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
                      style={{
                        color: theme.palette.primary.contrastText,
                        textAlign: "center",
                      }}
                    >
                      <FiArrowRightCircle size="2rem" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box sx={{ width: "100%", height: "100%" }}></Box>
          )}
        </Link>
      </Box>
    </>
  );
}

export default function projectList() {
  const height_100vh = use100vh();

  return (
    <Layout title="project list" description="louis labs project list">
      <Grid container>
        {Object.keys(project_thumbnails).map((project, index) => {
          const { title, thumbnail, target_path } = project_thumbnails[project];
          return (
            <>
              <Grid item xs={3} sx={{ height: height_100vh / 4 }}>
                <ProjectThumbnail title={title} thumbnail={thumbnail} target_path={target_path} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Layout>
  );
}

const project_thumbnails = {
  m5stack_tryout: {
    title: "m5stack_tryout_project_title",
    thumbnail: m5stack_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  youtube_split_view_tryout: {
    title: "youtube_split_view_tryout_project_title",
    thumbnail: youtube_split_view_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  voron_tryout: {
    title: "voron_tryout_project_title",
    thumbnail: voron_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  traefik_tryout: {
    title: "traefik_tryout_project_title",
    thumbnail: traefik_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  allwinner_v3s_tryout: {
    title: "allwinner_v3s_tryout_project_title",
    thumbnail: allwinner_v3s_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  tradingview_dashboard: {
    title: "Tradingview Dashboard",
    thumbnail: tradingview_dashboard_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  appium_behave_notes: {
    title: "appium behave notes",
    thumbnail: appium_behave_notes_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  daily_job_search: {
    title: "project_title",
    thumbnail: daily_job_search_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  hk_data_searcher: {
    title: "hk data search board",
    thumbnail: hk_data_searcher_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  hko_weather_bot: {
    title: "project_title",
    thumbnail: hko_weather_bot_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  m5stack_playlist: {
    title: "project_title",
    thumbnail: m5stack_playlist_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  my_linux_toolbox: {
    title: "my linux toolbox",
    thumbnail: my_linux_toolbox_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  opencv_car_counting_tryout: {
    title: "opencv car counting tryout",
    thumbnail: opencv_car_counting_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  pet_projects: {
    title: "My pet projects",
    thumbnail: pet_projects_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  portfolio_tryout: {
    title: "my portfolio tryout",
    thumbnail: portfolio_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  printer_board_tryout: {
    title: "My printer board tryout",
    thumbnail: printer_board_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  rthk31_rthk32_linux_viewer: {
    title: "rthk31 rthk32 linux viewer",
    thumbnail: rthk31_rthk32_linux_viewer_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  slic3r_tryout: {
    title: "slic3r tryout",
    thumbnail: slic3r_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
  tappy_tryout: {
    title: "tappy tryout",
    thumbnail: tappy_tryout_thumbnail,
    target_path: "/docs/projects/helloProjects",
  },
};
