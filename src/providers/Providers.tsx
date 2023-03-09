import { IContextProps } from "./@types";
import { ToastifyProvider } from "./ToastifyContext";
import { UserProvider } from "./UserContext";
import { VarProvider } from "./VarContext";

export const Providers = ({ children }: IContextProps) => (
  <ToastifyProvider>
    <UserProvider>
      <VarProvider>{children}</VarProvider>
    </UserProvider>
  </ToastifyProvider>
);
