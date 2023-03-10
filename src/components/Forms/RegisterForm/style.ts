import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  button {
    height: 48px;
    padding: 10px 22px;
    background-color: var(--grey-300);
    border: 1px solid var(--grey-0);
    border-radius: var(--radius-default);
    color: var(--grey-0);
    font-weight: 500;
    font-size: 1rem;

    :hover{
      background-color: #F8F9FA50;
      border: 1px solid #F8F9FA50;
      color: var(--grey-200);
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

