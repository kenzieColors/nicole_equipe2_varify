import styled from "styled-components";

const StyledDashboard = styled.div`
  width: 100%;
  max-width: 1000px;

  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  h3 {
    color: var(--grey-0);
    padding-left: 15px;
  }

  main {
    margin-top: 50px;
  }

  @media (max-width: 769px) {
  }
`;

export default StyledDashboard;
