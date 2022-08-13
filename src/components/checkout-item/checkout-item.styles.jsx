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
    margin-left: 6px;

    .arrow {
      cursor: pointer;
    }

    .value {
      -moz-appearance: textfield;
      width: min(6vw, 40px);
      font-size: min(2vw, 16px);
      text-align: center;
      margin: 0 min(1.5vw, 10px);

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  .remove-button {
    padding-left: 12px;
    margin-right: 10px;
    cursor: pointer;
  }
`
