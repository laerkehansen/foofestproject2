"use client";
import { useContext, useEffect, useState } from "react";
import { KviteringContext } from "@/app/lib/KvitteringContext";
const ReservationTimer = ({}) => {
  const { reservationId, timeRemaining } = useContext(KviteringContext);

  // const { setReservationId, timeRemaining } = useContext(KviteringContext);
  // const [timeLeft, setTimeLeft] = useState(300); // 300 sekunder = 5 minutter
  // const [timeLeft, setTimeLeft] = useState(timeRemaining);
  console.log("reservationId:", reservationId);
  // Formattering af tiden
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Skjul komponenten, hvis der ikke er en aktiv reservation
  if (!reservationId) return null;
  // useEffect(() => {
  //   if (!reservationId) {
  //     console.log("Ingen reservationId modtaget, timeren starter ikke.");
  //     return;
  //   }

  //   const timer = setInterval(() => {
  //     setTimeLeft((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(timer); // Stop timeren
  //         onTimeout(reservationId); // Udløs timeout
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   console.log("Timer startet for reservation:", reservationId);

  //   // Rens op, hvis komponenten unmountes eller `reservationId` ændres
  //   return () => {
  //     clearInterval(timer);
  //     console.log("Timer stoppet eller komponent unmounted.");
  //   };
  // }, [reservationId, onTimeout]);

  // const handleConfirm = () => {
  //   console.log("Reservation bekræftet:", reservationId);
  //   setTimeLeft(0); // Stop nedtællingen
  //   onConfirm(reservationId); // Udløs bekræftelse
  // };

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  // };

  // if (!reservationId) {
  //   return null; // Skjul komponenten, hvis der ikke er en reservation
  // }

  return (
    <div className="bg-customPink z-30 col-span-full justify-center items-center gap-6 flex">
      <h3 className="text-center">
        Din reservation udløber om: {formatTime(timeRemaining)}
      </h3>
      <button
        // onClick={handleConfirm}
        className="border-black border-2 text-lg py-1 px-2"
      >
        Bekræft Reservation
      </button>
    </div>
  );
};

export default ReservationTimer;
