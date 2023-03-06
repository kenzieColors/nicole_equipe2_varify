import { createContext, useState } from "react";

interface iUserContext {
  user: iUser | null;
}

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUser {
  id: number;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
