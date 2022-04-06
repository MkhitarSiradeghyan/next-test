import Layout from '../components/Layout'
import '../styles/globals.sass'
import {Provider} from 'react-redux'
import {store} from './../redux/store';
import { useRouter } from 'next/dist/client/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const titleStr = router.asPath.match(/\w*$/gi)[0] || 'Home'
  const title = titleStr[0].toUpperCase() + titleStr.slice(1)
  return (
    <Provider store={store}>
      <Layout title={title} >
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
