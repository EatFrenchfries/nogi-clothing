import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: min(5vw, 28px);
    margin-left: 20px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    max-width: 1200px;
    min-width: 355px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
