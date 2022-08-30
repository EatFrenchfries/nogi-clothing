import styled from 'styled-components'
export const CheckoutContainer = styled.div`
  width: 70%;
  min-width: 335px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid darkgrey;

    .header-block {
      margin-left: 12px;
      font-size: min(2vw, 22px);
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
        margin-right: 10px;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: min(4vw, 26px);
  }
`
