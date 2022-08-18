import { FC } from 'react'

import { formatter } from '../../utils/format-price/format-price'
import { CartItem as TCartItem } from '../../store/cart/cart-types'

import { CartItemContainer } from './cart-item.styles'

type CartItemProps = {
  cartItem:TCartItem 
}

const CartItem:FC<CartItemProps> = ({ cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ¥{formatter.format(price)}
        </span>
      </div>
    </CartItemContainer>
  )
}

export default CartItem
