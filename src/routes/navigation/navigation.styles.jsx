import styled from 'styled-components'
export const NavigationContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    max-width: 230px;
    max-height: 90px;
    width: 30vw;
    margin-top: 10px;

    .logo {
      width: 100%;
      height: 15vw;
      max-height: 75px;
    }
  }

  .nav-links-container {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-link {
      font-size: min(3vw, 20px);
      margin: 0.8vw 1vw;
      cursor: pointer;
    }
  }
`
