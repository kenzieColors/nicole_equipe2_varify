import styled from "styled-components";

const StyledLoginForm = styled.form`
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
    width: fit-content;
    align-self: flex-end;

    :hover{
      background-color: #F8F9FA50;
      border: 1px solid #F8F9FA50;
      color: var(--grey-200);
    }
  }
`;

export default StyledLoginForm;
