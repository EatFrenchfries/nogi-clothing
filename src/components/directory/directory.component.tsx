import { Key } from 'react'

import DirectoryItem from '../directory-item/directory-item.component'

import { CategoriesContainer } from './directory.styles'

export type DirectoryCategory = {
  id:Key
  title:string
  imageUrl:string
  route:string
}

const categories:DirectoryCategory[] = [
  {
    id: 1,
    title: 'T-shirts',
    imageUrl: '//d1rypb7ac4155m.cloudfront.net/res/nogizaka46/G1Tj-8-2020-12-25-06-41-14/5fe5898ad85b6',
    route: 'shop/T-shirts'
  },
  {
    id: 2,
    title: 'Hoodies',
    imageUrl: '//d1rypb7ac4155m.cloudfront.net/res/nogizaka46/w0Gp-8-2021-03-29-09-05-00/6061983c7279b',
    route: 'shop/Hoodies'
  },
  {
    id: 3,
    title: 'Hats',
    imageUrl: '//d1rypb7ac4155m.cloudfront.net/res/nogizaka46/OucK-8-2019-09-06-02-36-13/5d71c61d985a2',
    route: 'shop/Hats'
  },
  {
    id: 4,
    title: 'Towels',
    imageUrl: '//d1rypb7ac4155m.cloudfront.net/res/nogizaka46/xhd7-8-2021-12-24-03-54-56/61c5449057e80',
    route: 'shop/Towels'
  },
  {
    id: 5,
    title: 'Photo Albums',
    imageUrl: '//d1rypb7ac4155m.cloudfront.net/res/nogizaka46/6l2j-8-2021-12-13-07-18-46/61b6f3d6a03ad',
    route: 'shop/Photo%20Albums'
  }
]
const Directory = () => {
  return (
    <div>
      <CategoriesContainer>
        {categories.map(category => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </CategoriesContainer>
    </div>
  )
}

export default Directory
