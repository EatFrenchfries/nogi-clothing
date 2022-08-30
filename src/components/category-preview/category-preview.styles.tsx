import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width:800px) {
    h2 {
      margin:5px 0;
    }
  }

  .title {
    font-size: 28px;
    margin-left: 20px;
    margin-bottom: 25px;
    cursor: pointer;

    @media screen and (max-width:800px) {
      font-size: 24px;
    }
  }

  .preview {
    max-width: 1200px;
    min-width:335px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
