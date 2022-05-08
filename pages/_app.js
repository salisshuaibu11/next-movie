import globalStyles from "styles/global"
import ThemeProvider from "utils/hocs/ThemeProvider"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <style jsx>{globalStyles}</style>
    </>
  )
}

export default MyApp
