import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import { Paper, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>March Movers</title>

        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Paper style={theme.root} elevation={0}>
          <PageTransition timeout={300} classNames='page-transition'>
            <Component {...pageProps} />
          </PageTransition>
        </Paper>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
