import { FC,ChangeEvent,KeyboardEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { clearItemFromCart, addItemToCart, removeItemFromCart, updateItemFromCart } from '../../store/cart/cart-action'
import { selectCartItems } from '../../store/cart/cart-selector'
import { formatter } from '../../utils/format-price/format-price'
import { CartItem } from '../../store/cart/cart-types'

import { CheckoutItemContainer } from './checkout-item.styles'

type CheckoutItemProps = {
  cartItem:CartItem
}

const CheckoutItem:FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price, quantity } = cartItem

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

  const updateItemHandler = (e:ChangeEvent<HTMLInputElement>) => {
    cartItem.quantity = Math.trunc(+e.target.value)
    dispatch(updateItemFromCart(cartItems, cartItem))
  }

  const keyUpHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/\D/g, '')
  }

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <input type="number" className="value" value={quantity} onKeyUp={keyUpHandler} onChange={updateItemHandler} />
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{formatter.format(price)}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem