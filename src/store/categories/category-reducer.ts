import { AnyAction } from 'redux'
import { Category } from './category-types'
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed, searchCategories } from './category-action'

export type CategoriesState = {
  readonly categories: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
  readonly search: string
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
  search: ''
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction) => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true }
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, isLoading: false, categories: action.payload }
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload }
  }

  if (searchCategories.match(action)) {
    return { ...state, search: action.payload }
  }

  return state
}
