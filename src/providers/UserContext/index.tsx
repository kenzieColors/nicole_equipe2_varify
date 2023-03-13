import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IRegisterFormValues,
  ILoginFormValues,
} from "../@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  console.log(user);

  const navigate = useNavigate();

  const userRegister = async (data: IRegisterFormValues) => {
    try {
      await api.post("/register", data);
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

  return (
    <UserContext.Provider
      value={{ user, setUser, userRegister, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
