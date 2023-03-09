import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IToastifyContextProps } from "../@types";

export const ToastifyContext = createContext({});

export const ToastifyProvider = ({ children }: IToastifyContextProps) => {
  const toastify = (type: string, message: string) => {
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
        position="top-right"
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
