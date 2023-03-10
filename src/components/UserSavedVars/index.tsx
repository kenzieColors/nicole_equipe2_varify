import { useContext, useEffect } from "react";
import { IUserSavedVars } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import { VarContext } from "../../providers/VarContext";
import UserSavedVarsCard from "./UserSavedVarsCard";

const UserSavedVars = () => {
  const { requestUserSavedVars, userVars } = useContext(VarContext);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   user ? requestUserSavedVars(user.id) : null;
  // }, []);

  return (
    <div>
      {userVars.map((savedVar: IUserSavedVars) => {
        console.log(savedVar);
        return <UserSavedVarsCard {...savedVar} key={savedVar.id} />;
      })}
    </div>
  );
};
export default UserSavedVars;
