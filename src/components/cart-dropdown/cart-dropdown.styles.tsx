import styled from 'styled-components'

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
`

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto scroll;
  }

  button {
    margin: 10px auto 0;
  }
`
