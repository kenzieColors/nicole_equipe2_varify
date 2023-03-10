import styled from "styled-components";

const StyledRegisterPage = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #212529;

  .container__registerForm{
    border: 2px solid var(--color-brand-4);
    margin: 15px;
    padding: 20px;
    border-radius: var(--radius-default);
    
    h2{
      color: var(--grey-500);
    }
  }

  @media (min-width: 600px){
    .container__registerForm{
      max-width: 600px;
      margin: 0 auto;
    }
  }
`

export default StyledRegisterPage