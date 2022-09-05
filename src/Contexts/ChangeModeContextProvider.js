import React, { useState, createContext } from "react";

export const ChangeModeContext = createContext();

const ChangeModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const changed = () =>{
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <ChangeModeContext.Provider value={{ mode, changed }}>
      {children}
    </ChangeModeContext.Provider>
  );
};

export default ChangeModeContextProvider;
