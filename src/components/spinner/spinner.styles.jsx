import styled from 'styled-components'

export const SpinnerOverlay = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(127, 16, 131, 0.3);
  border-radius: 50%;
  border-top-color: #7f1083;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
