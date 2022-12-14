import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/category-selector'

import { CategoryContainer, Title } from './category.styles'

type CategoryRouteParams = {
  category:string
}

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    window.scrollTo(0, 0)
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category}</Title>
      {isLoading ? <Spinner /> : <CategoryContainer>{products && products.map(product => <ProductCard key={product.id} product={product} />)}</CategoryContainer>}
    </Fragment>
  )
}

export default Category
