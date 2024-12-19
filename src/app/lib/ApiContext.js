"use client";

import { createContext, useContext, useState, useEffect } from "react";
export const ApiContext = createContext();

const ApiContextP = ({ children }) => {
  const [scheduleBands, setScheduleBands] = useState([]);
  return (
    <ApiContext.Provider
      value={{
        scheduleBands,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextP;
