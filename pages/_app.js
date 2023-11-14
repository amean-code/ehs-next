import Cursor from '../components/Cursor'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Cursor />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
