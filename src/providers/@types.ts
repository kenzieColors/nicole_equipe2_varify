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
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface IVarContext {
  variables: IVariables;
  changeVariables: (id: string, value: string | number) => void;
  globalVarGenerator: () => string;
  userVars: IUserSavedVars[];
  setUserVars: React.Dispatch<React.SetStateAction<IUserSavedVars[]>>;
  requestUserSavedVars: (userId: number) => Promise<void>;
}

export interface IVarContextProps {
  children: React.ReactNode;
}

export interface IVariables {
  colorPrimary?: string | number;
  colorSecondary?: string | number;
  colorTertiary?: string | number;
  titleSize1?: number | string;
  titleSize2?: number | string;
  titleSize3?: number | string;
  textSize1?: number | string;
  textSize2?: number | string;
  textSize3?: number | string;
  radiusSize1?: number | string;
  radiusSize2?: number | string;
  radiusSize3?: number | string;
}

export interface IToastifyContextProps {
  children: React.ReactNode;
}

export interface IContextProps {
  children: React.ReactNode;
}

export interface IUserSavedVars {
  userId: number;
  colors: string[];
  titles: number[];
  texts: number[];
  radius: number[];
  id: number;
}
