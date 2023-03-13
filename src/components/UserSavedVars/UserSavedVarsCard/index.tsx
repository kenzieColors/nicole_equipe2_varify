import { useEffect, useState } from "react";
import { IUserSavedVars } from "../../../providers/@types";
import StyledUserSavedVarsCards from "./style";

const UserSavedVarsCard = ({ favorite }: IUserSavedVars) => {
  const [colorPrimiryCardBack, setcolorPrimiryCardBack] = useState<
    string | undefined
  >("");
  const [colorSecondaryCardBack, setcolorSecondaryCardBack] = useState<
    string | undefined
  >("");
  const [colorTertiaryCardBack, setcolorTertiaryCardBack] = useState<
    string | undefined
  >("");

  useEffect(() => {
    setcolorPrimiryCardBack(favorite?.colorPrimary);
    setcolorSecondaryCardBack(favorite?.colorSecondary);
    setcolorTertiaryCardBack(favorite?.colorTertiary);
  }, []);

  return (
    <StyledUserSavedVarsCards>
      <p style={{ backgroundColor: colorPrimiryCardBack }}>
        {favorite?.colorPrimary}
      </p>
      <p style={{ backgroundColor: colorSecondaryCardBack }}>
        {favorite?.colorSecondary}
      </p>
      <p style={{ backgroundColor: colorTertiaryCardBack }}>
        {favorite?.colorTertiary}
      </p>

      <button className="button__clipboard">Copy</button>
      <button className="button__delete">Del</button>
    </StyledUserSavedVarsCards>
  );
};

export default UserSavedVarsCard;
