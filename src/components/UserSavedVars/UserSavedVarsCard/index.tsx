import { IUserSavedVars } from "../../../providers/@types";

const UserSavedVarsCard = (savedVar: IUserSavedVars) => {
  return (
    <div>
      <p>Id: {savedVar.id}</p>
      <p>Colors: {savedVar.colors}</p>
      <p>Radius: {savedVar.radius}</p>
      <p>Texts: {savedVar.texts}</p>
      <p>Titles: {savedVar.titles}</p>
      <p>User id: {savedVar.userId}</p>

      <button>Copy to clipboard</button>
      <br />
      <button>Delete</button>
    </div>
  );
};

export default UserSavedVarsCard;
