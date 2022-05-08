import globalStyles from "styles/global"
import ThemeProvider from "utils/hocs/ThemeProvider"
import Layout from "parts/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <style jsx>{globalStyles}</style>
    </>
  )
}

export default MyApp
