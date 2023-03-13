export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserContext {
  userToken: string | null;
  userID: string | null;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
  userVars: IUserSavedVars[];
  setUserVars: React.Dispatch<React.SetStateAction<IUserSavedVars[]>>;
  requestUserSavedVars: (userId: string) => Promise<void>;
  saveUserVars: (variables: IVariables) => Promise<void>;
}

export interface IVarContext {
  variables: IVariables;
  setVarColors: (id: string, value: string) => void;
  setVarSizes: (id: string, value: number) => void;
  globalVarGenerator: (variables: IVariables) => string;
}

export interface IVarContextProps {
  children: React.ReactNode;
}

export interface IVariables {
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  titleSize1?: number;
  titleSize2?: number;
  titleSize3?: number;
  textSize1?: number;
  textSize2?: number;
  textSize3?: number;
  radiusSize1?: number;
  radiusSize2?: number;
  radiusSize3?: number;
}

export interface IUserSavedVars {
  userId: number;
  favorite: IVariables;
  id: number;
}
export interface IToastifyContextProps {
  children: React.ReactNode;
}

export interface IContextProps {
  children: React.ReactNode;
}
