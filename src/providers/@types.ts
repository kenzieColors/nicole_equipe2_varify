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
  confirmPassword: string;
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
  colors: IColors;
  titles: ISize;
  texts: ISize;
  radius: ISize;
  changeColors: (id: string, value: string) => void;
  changeTitles: (id: string, value: number) => void;
  changeTexts: (id: string, value: number) => void;
  changeRadius: (id: string, value: number) => void;
}

export interface IVarContextProps {
  children: React.ReactNode;
}

export interface IColors {
  primary?: string;
  secondary?: string;
  tertiary?: string;
}

export interface ISize {
  size1?: number;
  size2?: number;
  size3?: number;
}

export interface IToastifyContextProps {
  children: React.ReactNode;
}

export interface IContextProps {
  children: React.ReactNode;
}
