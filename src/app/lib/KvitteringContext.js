"use client";
import { createContext, useContext, useState, useEffect } from "react";
// import { cartData } from "../useContext";

export const KviteringContext = createContext();
// export const KviteringContext =
//   (createContext < cartData) | (undefined > undefined);

// Opret provider til at indpakke komponenter og give adgang til context
export const KviteringProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});
  // const [reservationId, setReservationId] = useState(null);

  const [reservationId, setReservationId] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const startReservation = (id) => {
    setReservationId(id);
    setTimeRemaining(300); // Sæt timeren til 5 minutter (300 sekunder)
  };

  const handleTimeout = () => {
    console.log("Reservation timed out.");
    setReservationId(null);
    setTimeRemaining(0);
  };

  const confirmReservation = () => {
    console.log("Reservation confirmed.");
    setReservationId(null);
    setTimeRemaining(0);
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeout();
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining]);

  const updateCartData = (newData) => {
    setCartData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <KviteringContext.Provider
      value={{
        cartData,
        updateCartData,
        reservationId,
        timeRemaining,
        startReservation,
        confirmReservation,
      }}
    >
      {children}
    </KviteringContext.Provider>
  );
};
