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
      const response = await api.post("/register", formData);
      console.log(response);
      // setUser(response.data.user);
      // localStorage.setItem("@Token", response.data.accessToken);
      //adicionar toast de confirmação
      navigate("/");
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
