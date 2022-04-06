import Navigation from './Navigation';
import Footer from './Footer';
import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title || "Home"} | Next App</title>
      </Head>
      <Navigation />
      <main className='content'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout