import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { BackDrop, CartDropdownContainer } from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    setIsCartOpen(false)
    navigate('/checkout')
  }

  const hideCartDropdown = () => {
    setIsCartOpen(false)
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
