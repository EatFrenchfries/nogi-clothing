import { Fragment, useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import Spinner from "../../components/spinner/spinner.component"
import ProductCard from "../../components/product-card/product-card.component"
import { selectCategoriesMap,selectIsLoading } from "../../store/categories/category-selector"
import {CategoryItem} from '../../store/categories/category-types'

import { SearchContainer, Cover } from "./events.styles"

type CategoryRouteParams = {
  goods:string
}


const imageUrl = {
  birthday:"https://www.nogizaka46.com/images/46/217/ae6434a94edb62be3e2bf4f6c6955.jpg",
  summer:"https://www.nogizaka46.com/images/46/c2a/ee314c22e6f9822d950fd9a10fc22.jpg",
  members:"https://www.nogizaka46.com/images/46/0b0/78d5bd87d42d71d7a0ed278187e04.jpg"
}

const Event = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)
  const { goods } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  
  const [results, setResults] = useState<CategoryItem[]>([])
  const [url, setUrl] = useState("")
  const search = goods.toLocaleLowerCase()

  useEffect(()=>{
    document.body.style.background = "linear-gradient(to right, #fc5c7d, #6a82fb)";
    window.scrollTo(0, 0)
    const filteritems:CategoryItem[] = []
    Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title]          
      const filter = products.filter((product) => {
        return product.name.toLocaleLowerCase().includes(search)})
      
      return filteritems.push(...filter)})
    setResults(filteritems)

    switch(search){
      case "birthday":
        setUrl(imageUrl.birthday)
        break
      case "summer":
        setUrl(imageUrl.summer)
        break
      case "5th members":
        setUrl(imageUrl.members)
        break
      default:
        setUrl(imageUrl.birthday)
    }

    return () => {
      document.body.style.background = "white"}
    
  },[categoriesMap,goods])
  
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : <Fragment>
        <Cover style={{
          backgroundImage: `url(${url})`}}></Cover>
        <SearchContainer>
        {
        results.map((product) => (<ProductCard key={product.id} product={product} />))
        }
        </SearchContainer>
      </Fragment>
      }
    </Fragment>
  )
}

export default Event