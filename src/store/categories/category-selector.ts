import { createSelector } from 'reselect'

import { CategoriesState } from './category-reducer'
import { CategoriesMap } from './category-types'
import { RootState } from '../store'

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

export const selectCategories = createSelector([selectCategoryReducer], categoriesSlice => categoriesSlice.categories)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoriesMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title] = items
      return acc
    }, {} as CategoriesMap)
)

export const selectIsLoading = createSelector([selectCategoryReducer], categoriesSlice => categoriesSlice.isLoading)
export const selectSearch = createSelector([selectCategoryReducer], categoriesSlice => categoriesSlice.search)
