import SideBar from "containers/Sidebar";
import AppHeader from "containers/AppHeader";
import MyHead from "components/MyHead";

import DarkModeToggle from "containers/DarkModeToggle";
import MainWrapper from "./MainWrapper";

import withTheme from "utils/hocs/withTheme";
import { Media, MediaContextProvider } from "utils/helpers/media";
import ContentWrapper from "./ContentWrapper";

const Layout = ({theme, children}) => {
  console.log(theme)
  return (
    <>
      <MyHead />

      <MediaContextProvider>

        <Media at="sm">
          <MainWrapper theme={theme}>
            <AppHeader />
            <ContentWrapper theme={theme}>
              {children}
            </ContentWrapper>
          </MainWrapper>
        </Media>

        <Media greaterThan="sm">
          <MainWrapper theme={theme}>
            <SideBar />
            <div className="desktop-widgets-container">
              {/* Search Bar */}
              <DarkModeToggle 
                id="desktop"
                className="left-margin"
              />
              {/* The User */}
            </div>
            <style jsx>{`
              .desktop-widgets-container {
                position: absolute;
                top: 0;
                right: 0;
                padding: 2rem;
                display: flex;
                align-items: center;
              }

              .desktop-widgets-container > :global(*:not(:first-child)) {
                margin-left: 12px;
              } 
            `}</style>
            <ContentWrapper theme={theme}>
              {children}
            </ContentWrapper>
          </MainWrapper>
        </Media>

      </MediaContextProvider>
    </>
  );
};

export default withTheme(Layout);