import { StyledButton } from "./style";

interface IButton {
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClickFunction: () => void;
  disabled?: boolean;
}
const Button = ({ children, type, onClickFunction, disabled }: IButton) => {
  return (
    <StyledButton type={type} onClick={onClickFunction} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
