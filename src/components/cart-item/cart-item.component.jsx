import { formatter } from '../../utils/format-price/format-price'

import { CartItemContainer } from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
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
