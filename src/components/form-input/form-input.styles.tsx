import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = '#7f1083'

const shrinkLabel = css`
  top: -16px;
  font-size: 16px;
  color: ${mainColor};
`
export const Group = styled.div`
  position: relative;
  margin: 40px 0;

  .form-input {
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 12px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
      color: black;
    }

    &:focus ~ .form-input-label {
      ${shrinkLabel}
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${subColor};
    font-size: 18px;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: all 300ms ease;

    &.shrink {
      ${shrinkLabel};
    }
  }
`
