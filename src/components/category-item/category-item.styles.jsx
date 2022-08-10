import styled from 'styled-components'

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 280px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .category-body-container {
      opacity: 0.9;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .category-body-container {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
      font-weight: bold;
      margin: 6px 6px -12px;
      font-size: 24px;
      color: #4a4a4a;
    }

    p {
      font-weight: lighter;
      font-size: 18px;
    }
  }
`