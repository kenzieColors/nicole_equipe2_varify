import styled from "styled-components";

const StyledLoginPage = styled.main`
  height: 100vh;
  width: 100vw;

  .container__loginForm {
    border: 2px solid var(--color-brand-4);
    margin: 15px;
    padding: 20px;
    border-radius: var(--radius-default);

    h2{
      color: var(--grey-500);
      text-align: center;
    }
  }

  @media (min-width: 600px){
    .container__loginForm{
      max-width: 600px;
      margin: 30px auto;
    }
  }
`;

export default StyledLoginPage;