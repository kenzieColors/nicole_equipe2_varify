import { useContext, useEffect } from "react";
import { IUserSavedVars } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import StyledUserSavedVars from "./style";
import UserSavedVarsCard from "./UserSavedVarsCard";

const UserSavedVars = () => {
  const { userID, userVars, requestUserSavedVars } = useContext(UserContext);

  useEffect(() => {
    userID ? requestUserSavedVars(userID) : null;
  }, []);

  return (
    <StyledUserSavedVars>
      {userVars ? (
        userVars.map((savedVar: IUserSavedVars) => {
          return <UserSavedVarsCard {...savedVar} key={savedVar.id} />;
        })
      ) : (
        <p>No saved variables yet.</p>
      )}
    </StyledUserSavedVars>
  );
};
export default UserSavedVars;
