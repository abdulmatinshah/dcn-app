import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import MyNav from './myNav'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Layout = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <MyNav />
      <header>
        <Navbar transparent={false} />
      </header>
      <main className='h-96'>{props.children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
