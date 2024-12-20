"use client";
import Link from "next/link";
import { createContext, useContext, useState, useEffect } from "react";

export const KviteringContext = createContext();

// Opret provider til at indpakke komponenter og give adgang til context
export const KviteringProvider = ({ children }) => {
  const [cartData, setCartData] = useState({});

  const [reservationId, setReservationId] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeoutMessage, setTimeoutMessage] = useState("");
  const startReservation = (id, timeout) => {
    setReservationId(id);
    setTimeRemaining(timeout);
    setTimeoutMessage("");

    // console.log(`Reservation startet. ID: ${id}, Timeout: ${timeout}s`);
  };
  // Funktion til at håndtere timeout
  const handleTimeout = () => {
    setTimeoutMessage(
      "Tidsgrænsen er udløbet! Din reservation er blevet annulleret."
    );
    console.log("Reservation timeout udløbet.");
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
        timeoutMessage,
      }}
    >
      {children}
      {timeoutMessage && (
        <div>
          {timeoutMessage}
          <Link href="/" className="border-black border-2 font-medium p-2">
            <p>naviger til forsiden</p>
          </Link>
        </div>
      )}
    </KviteringContext.Provider>
  );
};
