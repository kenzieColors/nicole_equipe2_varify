import styled from "styled-components";

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  button {
    height: 48px;
    padding: 10px 22px;
    background-color: var(--color-sec-orange);
    border: none;
    border-radius: var(--radius-default);
    color: var(--grey-0);
    font-weight: 600;
    font-size: 1rem;
    width: 100%;

    :hover{
      filter: brightness(0.9);
      color: var(--color-brand-4);
    }
  }

  p{
    font-size: 1rem;
    font-weight: var(--font-weight-2);
    color: var(--grey-500);
    margin-top: 15px;
    border-top: 2px groove var(--grey-600);
    line-height: 150%;
    text-align: center;

    .styledLink{
      color: var(--color-brand-1);
    }
  }
`;

export default StyledRegisterForm;

