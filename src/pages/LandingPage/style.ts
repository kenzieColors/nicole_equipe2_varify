import styled from "styled-components";
import { FieldSet } from "../../components/Forms/Input/style";

// export const StyledBox = styled.div`
//   max-width: 1000px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
export const StyledMain = styled.main`
  width: 100%;
  max-width: 1000px;

  height: 100vh;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;

  .upperForms {
    display: flex;
    flex-wrap: wrap;

    width: 100%;

    gap: 6px;
  }

  .upperForms > fieldset,
  .upperForms > div {
    width: 100%;
  }

  /* .lowerForms {
    display: flex;
    flex-direction: column;
  } */

  /* .lowerForms > fieldset {
    width: 100%;
  } */

  @media (min-width: 769px) {
    flex-wrap: wrap;

    gap: 6px;

    .upperForms {
      width: 50%;
    }

    .upperForms > fieldset,
    .upperForms > div {
      width: 100%;
    }
    /* .lowerForms > fieldset {
      width: 28%;
    } */
  }

  @media (min-width: 1000px) {
    max-width: 1000px;
    margin: 30px auto;
  }

  .titleBoxField {
    display: flex;
    flex-direction: column;

    border: 2px solid var(--color-brand-4);
    border-radius: var(--radius-default);

    color: var(--color-brand-4);

    padding: 1rem;

    margin: 4px;

    font-weight: var(--font-weight-3);

    @media (min-width: 769px) {
      position: fixed;
      width: 36%;
      top: 160px;
      right: 5%;

      legend {
        font-size: 1.2rem;
      }
    }
    .boxTextField {
      background-color: var(--grey-300);
      color: var(--grey-0);

      border-radius: var(--radius-default);

      margin: 4px;

      width: 100%;
      height: 100%;

      div {
        background-color: var(--grey-300);

        width: 100%;
        height: 100%;

        color: var(--grey-0);

        border-radius: var(--radius-default);
      }
    }
  }
`;
