import styled from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 1200px;
  min-width: 355px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (max-width:800px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`
