import styled from "styled-components";

const StyledDashboard = styled.div`
  width: 100%;
  max-width: 1000px;

  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  h2 {
    color: var(--grey-0);
  }

  @media (max-width: 769px) {
  }
`;

export default StyledDashboard;
