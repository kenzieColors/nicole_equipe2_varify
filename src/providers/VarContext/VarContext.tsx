import { createContext, useState } from "react";

interface iVarContext {
  colors: iColors;
  titles: iSize;
  texts: iSize;
  radius: iSize;
  changeColors: (id: string, value: string) => void;
  changeTitles: (id: string, value: number) => void;
  changeTexts: (id: string, value: number) => void;
  changeRadius: (id: string, value: number) => void;
}

interface iVarContextProps {
  children: React.ReactNode;
}

interface iColors {
  primary?: string;
  secondary?: string;
  tertiary?: string;
}

interface iSize {
  size1?: number;
  size2?: number;
  size3?: number;
}

export const VarContext = createContext({} as iVarContext);

export const VarProvider = ({ children }: iVarContextProps) => {
  const [colors, setColors] = useState<iColors>({});

  const [titles, setTitles] = useState<iSize>({});

  const [texts, setTexts] = useState<iSize>({});

  const [radius, setRadius] = useState<iSize>({});

  const changeColors = (id: string, value: string) => {
    if (id == "primary") {
      setColors({ ...colors, primary: value });
    }
    if (id == "secondary") {
      setColors({ ...colors, secondary: value });
    }
    if (id == "tertiary") {
      setColors({ ...colors, tertiary: value });
    }
  };

  const changeTitles = (id: string, value: number) => {
    if (id == "titleSize-1") {
      setTitles({ ...titles, size1: value });
    }
    if (id == "titleSize-2") {
      setTitles({ ...titles, size2: value });
    }
    if (id == "titleSize-3") {
      setTitles({ ...titles, size3: value });
    }
  };

  const changeTexts = (id: string, value: number) => {
    if (id == "textSize-1") {
      setTexts({ ...texts, size1: value });
    }
    if (id == "textSize-2") {
      setTexts({ ...texts, size2: value });
    }
    if (id == "textSize-3") {
      setTexts({ ...texts, size3: value });
    }
  };

  const changeRadius = (id: string, value: number) => {
    if (id == "radiusSize-1") {
      setRadius({ ...radius, size1: value });
    }
    if (id == "radiusSize-2") {
      setRadius({ ...radius, size2: value });
    }
  };

  return (
    <VarContext.Provider
      value={{
        colors,
        titles,
        texts,
        radius,
        changeColors,
        changeTitles,
        changeTexts,
        changeRadius,
      }}
    >
      {children}
    </VarContext.Provider>
  );
};
