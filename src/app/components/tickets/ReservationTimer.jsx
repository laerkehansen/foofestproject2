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

  return (
    <div className="bg-customPink z-30 col-span-full justify-center items-center  gap-6 flex">
      <h3 className="text-center p-2">
        Din reservation udløber om: {formatTime(timeRemaining)}
      </h3>
    </div>
  );
};

export default ReservationTimer;
