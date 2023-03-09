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
