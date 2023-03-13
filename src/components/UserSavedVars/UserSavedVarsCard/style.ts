import styled from "styled-components";

const StyledUserSavedVarsCards = styled.li`
  background-color: var(--grey-300);
  max-width: 300px;
  height: 100px;

  border: 2px solid var(--color-brand-4);
  margin: 15px;
  padding: 10px 50px;
  border-radius: var(--radius-default);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .button__clipboard {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 5px;
    bottom: 5px;
    border-radius: var(--radius-default);
  }
  .button__delete {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: var(--radius-default);
  }
`;

export default StyledUserSavedVarsCards;
