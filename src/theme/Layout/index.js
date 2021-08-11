import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AnnouncementBar from "@theme/AnnouncementBar";
import LayoutHead from "@theme/LayoutHead";
import LayoutProviders from "@theme/LayoutProviders";

import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import TabletLayout from "./TabletLayout";

import { ViewPortMeasureProvider } from "../ViewPortMeasureContext";

import "react-perfect-scrollbar/dist/css/styles.css";
import "./styles.css";

function Layout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;

  const theme = useTheme();
  const xs_up = useMediaQuery(theme.breakpoints.up("xs"));
  const md_up = useMediaQuery(theme.breakpoints.up("md"));
  const xl_up = useMediaQuery(theme.breakpoints.up("xl"));

  const SwitchLayout = (props) => {
    if (xl_up) {
      return <DesktopLayout {...props} />;
    } else if (md_up) {
      return <TabletLayout {...props} />;
    } else if (xs_up) {
      return <MobileLayout {...props} />;
    } else {
      return <DesktopLayout {...props} />;
    }
  };

  return (
    <>
      <PerfectScrollbar>
        <ViewPortMeasureProvider>
          <LayoutProviders>
            <LayoutHead {...props} />
            <AnnouncementBar />

            <SwitchLayout {...props} />

            {/* <Navbar /> */}
            {/* <div
            className={clsx(
              ThemeClassNames.wrapper.main,
              wrapperClassName,
              pageClassName
            )}
          >
            children
          </div> */}
            {/* {!noFooter && <Footer />} */}
          </LayoutProviders>
        </ViewPortMeasureProvider>
      </PerfectScrollbar>
    </>
  );
}

export default Layout;
