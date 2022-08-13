import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as NogiLogo } from '../../assets/nogi.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { selectCurrentUser } from '../../store/user/user-selector'
import { selectIsCartOpen } from '../../store/cart/cart-selector'
import { signOutStart } from '../../store/user/user-atcion'

import { NavigationContainer } from './navigation.styles.jsx'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)

  const isCartOpen = useSelector(selectIsCartOpen)

  const dispatch = useDispatch()
  const signOutUser = () => dispatch(signOutStart())

  return (
    <Fragment>
      <NavigationContainer>
        <Link className="logo-container" to="/">
          <NogiLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </NavigationContainer>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
