import { useNavigate } from 'react-router-dom'
import { CategoryContainer } from './category-item.styles.jsx'

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigation = useNavigate()

  const onNavigationHandler = () => navigation(route)

  return (
    <CategoryContainer onClick={onNavigationHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </CategoryContainer>
  )
}

export default CategoryItem
