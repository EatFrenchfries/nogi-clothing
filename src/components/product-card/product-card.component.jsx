import { useDispatch, useSelector } from 'react-redux'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { addItemToCart } from '../../store/cart/cart-action'
import { selectCartItems } from '../../store/cart/cart-selector'
import { formatter } from '../../utils/format-price/format-price'

import { ProductCardContainer } from './product-card.styles.jsx'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price } = product

  const addProductHandler = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">¥{formatter.format(price)}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductHandler}>
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
