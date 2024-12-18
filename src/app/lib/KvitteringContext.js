"use client";
import { createContext, useContext, useState } from "react";
// import { cartData } from "../useContext";

export const KviteringContext = createContext();
// export const KviteringContext =
//   (createContext < cartData) | (undefined > undefined);

// Opret provider til at indpakke komponenter og give adgang til context
export const KviteringProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});

  const updateCartData = (newData) => {
    setCartData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <KviteringContext.Provider value={{ cartData, updateCartData }}>
      {children}
    </KviteringContext.Provider>
  );
};
