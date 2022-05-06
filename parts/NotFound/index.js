import TitleSection from "./TitleSection";
import NotFoundImage from "./NotFoundImage";

import withTheme from "utils/hocs/withTheme";

const NotFound = ({
  theme,
  title,
  subtitle
}) => (
  <>
    <TitleSection 
      theme={theme}
      title={title}
      subtitle={subtitle}
    />
    <NotFoundImage 
      src="/assets/svgs/empty.svg"
      alt="Not found!"
    />
    <style jsx>{`
      :global(.not-found) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media $(theme.mediaQueries.medium) {
        :global(.not-found) {
          width: 65%
        }
      }  
    `}</style>
  </>
);

export default withTheme(NotFound);