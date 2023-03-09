import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 10px;

  .upperForms {
    display: flex;
    gap: 10px;
  }

  .upperForms > fieldset,
  .upperForms > div {
    width: 50%;
  }

  .lowerForms {
    display: flex;
  }

  .lowerForms > fieldset {
    width: 30%;
  }
`;