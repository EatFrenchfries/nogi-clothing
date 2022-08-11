import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../store/cart/cart-selector'
import { setIsCartOpen } from '../../store/cart/cart-action'

import { BackDrop, CartDropdownContainer } from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false))
    navigate('/checkout')
  }

  const hideCartDropdown = () => {
    dispatch(setIsCartOpen(false))
  }

  return (
    <Fragment>
      <BackDrop onClick={hideCartDropdown}></BackDrop>
      <CartDropdownContainer>
        <div className="cart-items">{cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}></CartItem>) : <span className="empty-message">Your cart is empty</span>}</div>
        <Button onClick={goToCheckoutHandler}>GO to checkout</Button>
      </CartDropdownContainer>
    </Fragment>
  )
}

export default CartDropdown
