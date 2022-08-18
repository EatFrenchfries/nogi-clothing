import { FC } from 'react'

import { useNavigate } from 'react-router-dom'
import { DirectoryCategory } from '../directory/directory.component'

import { CategoryContainer } from './directory-item.styles'

type CategoryItemProps = {
  category: DirectoryCategory
}

const DirectoryItem:FC<CategoryItemProps> = ({ category }) => {
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

export default DirectoryItem
