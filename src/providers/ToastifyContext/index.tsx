import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IToastifyContext, IToastifyContextProps } from "../@types";

export const ToastifyContext = createContext({} as IToastifyContext);

export const ToastifyProvider = ({ children }: IToastifyContextProps) => {
  const toastify = (type: "success" | "error" | "default", message: string) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "default") {
      toast(message);
    }
  };

  return (
    <ToastifyContext.Provider value={{ toastify }}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ToastifyContext.Provider>
  );
};
