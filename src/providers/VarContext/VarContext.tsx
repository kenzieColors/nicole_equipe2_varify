import { createContext, useState } from "react";

interface iVarContext {
  colors: iColors | null;
}

interface iVarContextProps {
  children: React.ReactNode;
}

interface iColors {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  gray?: string;
}

interface iFontSize {
  size1?: number;
  size2?: number;
  size3?: number;
}

interface iRadiusSize {
  size1?: number;
  size2?: number;
}

export const VarContext = createContext({} as iVarContext);

export const VarProvider = ({ children }: iVarContextProps) => {
  const [colors, setColors] = useState<iColors | null>(null);

  const [titles, setTitles] = useState<iFontSize | null>(null);

  const [texts, setText] = useState<iFontSize | null>(null);

  const [radius, setRadius] = useState<iRadiusSize | null>(null);

  return (
    <VarContext.Provider value={{ colors }}>{children}</VarContext.Provider>
  );
};
