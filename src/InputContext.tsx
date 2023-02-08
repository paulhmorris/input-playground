import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import type { InputOptions } from "~/types";
import { objectify } from "~/utils/helpers";

type InputContextType = {
  options: InputOptions;
  updateOptions: (args: InputOptions) => void;
  validity: string;
  updateValidity: (args: ValidityState) => void;
};

const InputContext = createContext<InputContextType | null>(null);

function InputContextProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<InputOptions>({
    type: "text",
    required: false,
  });
  const [validity, setValidity] = useState<string>("");

  function updateValidity(state: ValidityState) {
    const stateObject = objectify(state);
    setValidity(JSON.stringify(stateObject, undefined, 2));
  }

  function updateOptions(data: InputOptions) {
    setOptions((prevState) => {
      return { ...prevState, ...data };
    });
  }

  const value = { options, updateOptions, validity, updateValidity };
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
}

function useInputContext() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error(
      "useInputContext must be used within a InputContextProvider"
    );
  }
  return context;
}

export { useInputContext, InputContextProvider };
