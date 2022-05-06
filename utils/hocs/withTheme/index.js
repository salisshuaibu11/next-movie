import ThemeContext from "contexts/them-context";

function withTheme(WrappedComponent) {
  return React.forwardRef(function ThemeComponent(props, ref) {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <WrappedComponent 
            ref={ref}
            theme={themeContext}
            {...props}
          />
        )}
      </ThemeContext.Consumer>
    )
  })
};

export default withTheme;