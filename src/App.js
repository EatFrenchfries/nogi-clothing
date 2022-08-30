import { Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense, Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { checkUserSession } from './store/user/user-atcion'
import Spinner from './components/spinner/spinner.component'

import { GlobalStyle } from './global.styles'

const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const Authentication = lazy(() => import('./routes/authentication/authentication.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const SearchPage = lazy(() => import('./routes/search-page/search-page.component'))
const Events = lazy(() => import('./routes/events/events.component'))

const App = () => {
  const dispatch = useDispatch()
  console.log(1)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="event/:goods" element={<Events />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  )
}

export default App
