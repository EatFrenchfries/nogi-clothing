import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { addItemToCart } from '../../store/cart/cart-action'
import { selectCartItems } from '../../store/cart/cart-selector'
import { formatter } from '../../utils/format-price/format-price'
import { CategoryItem } from '../../store/categories/category-types'

import { ProductCardContainer } from './product-card.styles'

type ProductCardProps = {
  product:CategoryItem
}

const ProductCard:FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price } = product
  const [isCartAdd, setIsCartAdd] = useState(false)

  useEffect(()=>{
    if(isCartAdd) {
      const timer = setTimeout(()=>{
        setIsCartAdd(false)
      },1000)

      return ()=>{
        clearTimeout(timer)
      }
    }


  },[isCartAdd])

  const addProductHandler = () => {
    dispatch(addItemToCart(cartItems, product))
    setIsCartAdd(true)
  }

  return (
    <ProductCardContainer>
      <div className="img">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">¥{formatter.format(price)}</span>
      </div>
      {isCartAdd && <div className="message" onClick={()=>setIsCartAdd(false)}>Item is added to cart successfully.</div>}
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductHandler}>
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
