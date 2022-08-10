import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 120px;
  margin-bottom: 15px;

  img {
    width: 30%;
    height: 80px;
    padding-top: 15px;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
`
