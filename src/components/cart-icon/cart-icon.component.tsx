import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart-selector'
import { setIsCartOpen } from '../../store/cart/cart-action'

import { CartIconContainer } from './cart-icon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <div>
      <CartIconContainer onMouseUp={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" stroke="#7f1083" strokeWidth="1rem" />
        <span className="item-count">{cartCount}</span>
      </CartIconContainer>
    </div>
  )
}

export default CartIcon
