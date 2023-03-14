import { createContext, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IRegisterFormValues,
  ILoginFormValues,
  IUserSavedVars,
  IVariables,
} from "../@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userVars, setUserVars] = useState<IUserSavedVars[]>([]);
  const userToken = localStorage.getItem("@Token");
  const userID = localStorage.getItem("@ID");
  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      await api.post("/register", formData);
      //adicionar toast de confirmação
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@Token", response.data.accessToken);
      localStorage.setItem("@ID", response.data.user.id);
      //adicionar toast de confirmação
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    //adicionar toast de confirmação
    navigate("/");
  };

  const requestUserSavedVars = async (userID: string) => {
    try {
      const response = await api.get(`/favorites?userId=${userID}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUserVars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveUserVars = async (variables: IVariables) => {
    try {
      const response = await api.post(
        `/favorites`,
        { userId: userID, favorite: variables },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userToken,
        userID,
        user,
        setUser,
        userRegister,
        userLogin,
        userLogout,
        userVars,
        setUserVars,
        requestUserSavedVars,
        saveUserVars,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
