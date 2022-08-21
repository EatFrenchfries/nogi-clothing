import { useSelector } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selector'
import { formatter } from '../../utils/format-price/format-price'
import PaymentForm from '../../components/payment-form/payment-form.component'

import { CheckoutContainer } from './checkout.styles'
import { useEffect } from 'react'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  useEffect(()=> {
    window.scrollTo(0, 0)
  })

  return (
    <CheckoutContainer>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">TOTAL : ¥{formatter.format(cartTotal)}</div>
      {cartTotal > 0 ? <PaymentForm /> : null}
    </CheckoutContainer>
  )
}

export default Checkout
