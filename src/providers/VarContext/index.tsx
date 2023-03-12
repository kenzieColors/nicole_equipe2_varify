import { createContext, useState } from "react";
import { api } from "../../services/api";
import {
  IUserSavedVars,
  IVarContext,
  IVarContextProps,
  IVariables,
} from "../@types";

export const VarContext = createContext({} as IVarContext);

export const VarProvider = ({ children }: IVarContextProps) => {
  const [variables, setVariables] = useState<IVariables>({});
  const [userVars, setUserVars] = useState<IUserSavedVars[]>([
    {
      userId: 2,
      colors: ["#BCECE0", "#36EEE0", "#F652A0", "#4C5270"],
      titles: [17, 12],
      texts: [10],
      radius: [2],
      id: 3,
    },
  ]);

  const setVarColors = (id: string, value: string) => {
    if (id == "colorPrimary") {
      setVariables({ ...variables, colorPrimary: value });
    }

    if (id == "colorSecondary") {
      setVariables({ ...variables, colorSecondary: value });
    }

    if (id == "colorTertiary") {
      setVariables({ ...variables, colorTertiary: value });
    }
  };

  const setVarSizes = (id: string, value: number) => {
    if (id == "titleSize-1") {
      setVariables({ ...variables, titleSize1: value });
    }
    if (id == "titleSize-2") {
      setVariables({ ...variables, titleSize2: value });
    }
    if (id == "titleSize-3") {
      setVariables({ ...variables, titleSize3: value });
    }

    if (id == "textSize-1") {
      setVariables({ ...variables, textSize1: value });
    }

    if (id == "textSize-2") {
      setVariables({ ...variables, textSize2: value });
    }

    if (id == "textSize-3") {
      setVariables({ ...variables, textSize3: value });
    }

    if (id == "radiusSize-1") {
      setVariables({ ...variables, radiusSize1: value });
    }

    if (id == "radiusSize-2") {
      setVariables({ ...variables, radiusSize2: value });
    }

    if (id == "radiusSize-3") {
      setVariables({ ...variables, radiusSize3: value });
    }
  };

  const globalVarGenerator = () => {
    let varResult = "";
    const entries = Object.entries(variables);

    entries.forEach((entry) => {
      let variable = entry[0];
      let value = entry[1];

      varResult = `${varResult} 
      --${variable}: ${value}`;
    });
    return varResult;
  };

  const requestUserSavedVars = async (userId: number) => {
    try {
      const response = await api.get(`/favorites?userId=${userId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VarContext.Provider
      value={{
        variables,
        setVarColors,
        setVarSizes,
        globalVarGenerator,
        userVars,
        setUserVars,
        requestUserSavedVars,
      }}
    >
      {children}
    </VarContext.Provider>
  );
};
