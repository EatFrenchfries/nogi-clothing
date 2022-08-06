import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Routes/navigation/navigation.component'
import Home from './components/Routes/home/home.component'
import SignIn from './components/Routes/sign-in/sign-in.component'

const Shop = () => {
  return <h1>Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
