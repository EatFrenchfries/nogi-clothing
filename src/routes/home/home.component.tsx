import { useEffect,Fragment } from 'react'

import Directory from '../../components/directory/directory.component'
import HomeSwiper from '../../components/swiper/home-swiper.component'

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  })

  return (
  <Fragment>
    <HomeSwiper/>
    <Directory />
  </Fragment>
  )
}

export default Home
