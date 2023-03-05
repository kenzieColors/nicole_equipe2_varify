import { createContext, useState } from "react";

interface iUserContext {}

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUser {}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  return <UserContext.Provider value={}></UserContext.Provider>;
};
