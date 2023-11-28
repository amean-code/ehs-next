import Head from 'next/head'
import Cursor from '../components/Cursor'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
