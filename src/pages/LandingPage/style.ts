import styled from "styled-components";

export const StyledMain = styled.main`
  position: absolute;
  top: 90px;

  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 10px;

  background-color: #212529;

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
