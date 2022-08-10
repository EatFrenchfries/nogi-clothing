import styled from 'styled-components'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px;
  margin-bottom: 20px;
  font-size: 18px;
  background-color: #7f1083;
  color: white;
  text-transform: uppercase;
  font-family: 'Saira Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: #7f1083;
    border: 2px solid #7f1083;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: black;
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #7f1083;
  border: 2px solid #7f1083;

  &:hover {
    background-color: #7f1083;
    color: white;
    border: none;
  }
`
