import { Fragment, useEffect, useState} from "react"
import { useSelector } from "react-redux"

import Spinner from "../../components/spinner/spinner.component"
import ProductCard from "../../components/product-card/product-card.component"
import { selectCategoriesMap,selectIsLoading,selectSearch } from "../../store/categories/category-selector"
import {CategoryItem} from '../../store/categories/category-types'

import { SearchContainer, Title } from "./search-page.styles"

const SearchPage = () => {
  const search = useSelector(selectSearch).toLocaleLowerCase()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)
  const [results, setResults] = useState<CategoryItem[]>([])

  useEffect(()=>{
    setResults([])
    const filteritems:CategoryItem[] = []
    Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title]          
      const filter = products.filter((product) => {
        return product.name.toLocaleLowerCase().includes(search)})
      
        filteritems.push(...filter)})
    setResults(filteritems)
    
  },[search])
  
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : results.length>0 ? <Title>{results.length} search {results.length === 1 ? "result" :"results"} for "{search}"</Title>: <Title>No items match your search.</Title>
      }
      <SearchContainer>
      {results.length>0 ? 
        results.map((product) => (<ProductCard key={product.id} product={product} />)):
        null}
      </SearchContainer>
    </Fragment>
  )
}

export default SearchPage