import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 2px solid darkgray;
  padding: 15px 0;
  font-size: min(2vw, 24px);
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
    }
  }

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    margin-left: 8px;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    margin-right: 10px;
    cursor: pointer;
  }
`
