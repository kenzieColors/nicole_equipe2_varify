import { createContext, useContext, useState } from "react";
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
  IResponseLoginRegister,
  IResponseUserVar,
} from "../@types";
import { ToastifyContext } from "../ToastifyContext";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const { toastify } = useContext(ToastifyContext);

  const [user, setUser] = useState<IUser | null>(null);
  const [userVars, setUserVars] = useState<IUserSavedVars[]>([]);
  const userToken = localStorage.getItem("@Token");
  const userID = localStorage.getItem("@ID");
  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post<IResponseLoginRegister>(
        "/register",
        formData
      );
      toastify(
        "success",
        "Registro feito com sucesso, redirecionado para a página de login"
      );
      navigate("/login");
    } catch (error: any) {
      toastify("error", error.response.data);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post<IResponseLoginRegister>(
        "/login",
        formData
      );
      setUser(response.data.user);
      localStorage.setItem("@Token", response.data.accessToken);
      localStorage.setItem("@ID", JSON.stringify(response.data.user.id));
      toastify("success", "Login efetuado com sucesso!");
      navigate("/");
    } catch (error: any) {
      toastify("error", error.response.data);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");
    localStorage.removeItem("@ID");
    toastify("default", "Você se desconectou");
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
    } catch (error: any) {
      toastify("error", error.response.data);
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
      toastify("success", "Variáveis salvas na sua área de usuário");
    } catch (error: any) {
      toastify("error", error.response.data);
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
