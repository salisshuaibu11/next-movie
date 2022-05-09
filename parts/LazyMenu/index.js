import loadable from "@loadable/component";
import LazyLoadingErrorBoundary from "utils/hocs/LazyLoadingErrorBoundary";

const Menu = loadable(
  () => import(/* webpackChunkName: "menu" */ 'components/Menu', {
    fallback: <div>Loading...</div>,
    ssr: false
  })
);

const LazyMenu = props => (
  <LazyLoadingErrorBoundary>
    <Menu {...props} />
  </LazyLoadingErrorBoundary>
);

export default LazyMenu;