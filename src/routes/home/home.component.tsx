import { useEffect } from 'react'
import Directory from '../../components/directory/directory.component'

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  })

  return <Directory />
}

export default Home
