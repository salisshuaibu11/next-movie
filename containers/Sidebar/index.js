import SidebarInnerWrapper from "./SidebarInnerWrapper";
import StickyBox from "utils/hocs/StickyBox";
import LazyMenu from "parts/LazyMenu";

const SideBar = ({ className }) => (
  <StickyBox className={className}>
    <SidebarInnerWrapper>
      {/* TODO: introduce a layout shifting */}
      <LazyMenu />
    </SidebarInnerWrapper>
  </StickyBox>
);

export default SideBar;