import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 355px;
  display: flex;
  flex-direction: column;
  height: 370px;
  margin: 0 5px 40px;
  align-items: center;
  position: relative;
  font-weight: bold;

  .message {
    position:absolute;
    top:5px;
    width: 100%;
    height: 40px;
    background-color:rgba(106, 90, 205,0.7);
    color:white;
    border-radius:20px;
    font-size:18px;
    text-align:center;
    line-height:40px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width:800px) {
      display:block;
      opacity:0.9;
      min-width:unset;
      padding: 0 10px;
      top: 210px;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  
  @media screen and (max-width:800px) {
    &:hover {
      img {
        opacity: unset;
      }
  
      button {
        opacity: unset;
      }
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
      margin-right: 15px;
    }
  }
`
