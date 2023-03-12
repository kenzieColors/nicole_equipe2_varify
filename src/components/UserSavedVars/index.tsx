import { useContext, useEffect } from "react";
import { IUserSavedVars } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import UserSavedVarsCard from "./UserSavedVarsCard";

const UserSavedVars = () => {
  const { user, userVars, requestUserSavedVars } = useContext(UserContext);

  // useEffect(() => {
  //   user ? requestUserSavedVars(user.id) : null;
  // }, []);

  return (
    <div>
      {userVars
        ? userVars.map((savedVar: IUserSavedVars) => {
            console.log(savedVar);
            return <UserSavedVarsCard {...savedVar} />;
          })
        : null}
    </div>
  );
};
export default UserSavedVars;
