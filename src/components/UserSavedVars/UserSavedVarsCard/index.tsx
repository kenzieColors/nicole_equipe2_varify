import { IUserSavedVars, IVariables } from "../../../providers/@types";

const UserSavedVarsCard = ({ favorite }: IUserSavedVars) => {
  return (
    <div>
      <p>
        Colors: {favorite.colorPrimary} , {favorite.colorSecondary} ,
        {favorite.colorTertiary}
      </p>

      <button>Copy to clipboard</button>
      <br />
      <button>Delete</button>
    </div>
  );
};

export default UserSavedVarsCard;
