import { useRef, useState } from "react";
import { FieldSet, StyledTextField } from "./style";
import { HexColorPicker } from "react-colorful";
import { useOnClickOutside } from "usehooks-ts";

interface IInputColorPickProps {
  color: string | undefined;
  setColorFunction: (id: string, value: string) => void;
  label: string;
  className: string;
}

const InputColorPick = ({
  color,
  setColorFunction,
  label,
  className,
}: IInputColorPickProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleColorPick = () => {
    setOpen(!open);
  };

  useOnClickOutside(ref, toggleColorPick);

  return (
    <FieldSet color={color}>
      <StyledTextField
        label={label}
        className={className}
        type="text"
        value={color || ""}
        onChange={(event) => {
          const colorValue = event.target.value;
          setColorFunction(className, colorValue);
        }}
      ></StyledTextField>
      {open ? (
        <div className="colorful-container" ref={ref}>
          <HexColorPicker
            color={color}
            onChange={(event) => {
              setColorFunction(className, event);
            }}
          ></HexColorPicker>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          toggleColorPick();
        }}
        className="colorPickButton"
      ></button>
    </FieldSet>
  );
};

export default InputColorPick;
