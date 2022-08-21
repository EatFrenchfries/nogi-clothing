import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

export const MyPaper = styled(Paper)(({theme}) => `
  padding:2px 4px;
  display: flex;
  align-items: center;
  width: 200px;
  margin:0 2px;

  ${theme.breakpoints.down('600')} {
    width: 120px;
    height:33px;
  }
`)

export const MyInputBase = styled(InputBase)(({theme}) => `
  padding:0 2px 0 4px;

  input {
    font-size:20px;

    ${theme.breakpoints.down('600')} {
      font-size:14px;
    }
  }
`)

export const MyIconButton = styled(IconButton)(({theme}) => `
    ${theme.breakpoints.down('600')} {
      width: 25px;
      height:25px;
    }
`)