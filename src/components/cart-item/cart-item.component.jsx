import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <sapn className="name">{name}</sapn>
        <span className="price">
          {quantity} x ¥{price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
