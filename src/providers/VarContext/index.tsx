import { createContext, useState } from "react";
import { IVarContext, IVarContextProps, IColors, ISize } from "../@types";

export const VarContext = createContext({} as IVarContext);

export const VarProvider = ({ children }: IVarContextProps) => {
  const [colors, setColors] = useState<IColors>({});

  const [titles, setTitles] = useState<ISize>({});

  const [texts, setTexts] = useState<ISize>({});

  const [radius, setRadius] = useState<ISize>({});

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

  const globalVarGenerator = () => {
    let colorPrimary = "";
    let colorSecondary = "";

    if (colors.primary) {
      colorPrimary = `--color-brand-1: ${colors.primary}`;
    }
    if (colors.secondary) {
      colorSecondary = `--color-brand-2: ${colors.secondary}`;
    }

    console.log(`
    ${colorPrimary}
    ${colorSecondary}`);
  };

  globalVarGenerator();
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
