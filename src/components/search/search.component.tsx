import { useState, ChangeEvent,KeyboardEvent, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import SearchIcon from '@mui/icons-material/Search'
import { ThemeProvider } from "styled-components"
import { useTheme, StylesProvider } from "@material-ui/core/styles"
import { searchCategories} from '../../store/categories/category-action'
import {fetchCategoriesStart } from '../../store/categories/category-action'

import { MyPaper, MyInputBase,MyIconButton} from './search.styles'

const Search = () => {
  const muiTheme = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchWords, setSearchWords] = useState("")

  useEffect(()=> {
    dispatch(fetchCategoriesStart())
  },[])

  const changeHandler = (event:ChangeEvent<HTMLInputElement>)=> {
    setSearchWords(event.target.value)
  }

  const searchHandler = ()=> {
    if(searchWords.trim()){
      dispatch(searchCategories(searchWords.trim()))
      setSearchWords("")
      navigate('/search')
    }
  }

  const keyUpHandler = (event:KeyboardEvent<HTMLInputElement>)=> {
    if(event.key === "Enter"){
      if(searchWords.trim()){
        dispatch(searchCategories(searchWords.trim()))
        setSearchWords("")
        navigate('/search')
      }
    } 
  }

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
      <MyPaper>
        <MyInputBase
          placeholder="Search Items"
          onChange = {changeHandler}
          onKeyUp={keyUpHandler}
          value = {searchWords}
        />
        <MyIconButton type="button" onClick={searchHandler}>
          <SearchIcon />
        </MyIconButton>
      </MyPaper>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default Search