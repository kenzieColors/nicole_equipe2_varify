import styled from "styled-components";

const StyledUserSavedVarsCards = styled.li`
  background-color: var(--grey-300);
  width: 100%;
  height: 110px;

  border: 2px solid var(--grey-400);
  margin: 15px 0;
  padding: 10px 50px;
  border-radius: var(--radius-default);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 100%;
    font-size: 14px;
  }

  .button__clipboard {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: var(--radius-default);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--grey-100);
    background-color: var(--grey-300);
  }
  .button__clipboard:hover {
    border: 2px solid var(--grey-200);
    background-color: var(--grey-400);
  }
  .button__delete {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: var(--radius-default);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--grey-100);
    background-color: var(--grey-300);
  }
  .button__delete:hover {
    border: 2px solid var(--grey-200);
    background-color: var(--grey-400);
  }

  .content__wrapper {
    border-radius: var(--radius-default);
    outline: 3px solid var(--grey-400);
    width: 100%;
    height: fit-content;
  }
  .content__wrapper:hover {
    outline: 3px solid var(--grey-200);
  }

  @media (min-width: 769px) {
    flex-direction: row;
    min-width: 100px;
    max-width: 290px;

    p {
      align-items: center;
      padding: 5px;
      width: 100%;
      font-size: 14px;
    }
  }
`;
export default StyledUserSavedVarsCards;
