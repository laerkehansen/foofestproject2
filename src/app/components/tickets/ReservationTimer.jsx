import { useState, useEffect } from "react";

const ReservationTimer = ({ reservationId, onTimeout, onConfirm }) => {
  //vi modtager alle de props vi skal bruge til vores timer, og de betingelser der kan gøre den lndrer sig
  const [timeLeft, setTimeLeft] = useState(300); //vores state der styrer hvor lang tid vi har til at udfylde formularen

  useEffect(() => {
    if (!reservationId) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        console.log("Time Left:", prev);
        if (prev <= 1) {
          //hvis vores timer er mindre end 1 sekundt, så skal den clearinterval
          clearInterval(timer);
          onTimeout(reservationId); // Kald timeout-funktionen
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Rens op, hvis komponenten fjernes
  }, [reservationId, onTimeout]);

  const handleConfirm = () => {
    clearInterval(timer); //stop timeren, hvis vi når at bekræfte købet
    onConfirm(reservationId); // Bekræft reservationen
  };
  //formatere vores sekunder til minutter
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60); //laver sekunder om til minutter, og math.floor laver det om til hele tal
    const remainingSeconds = seconds % 60; //Beregner den resterende tid af vores minutter til sekunder, altså hvis vi havde 130 sekunder, så ville den skrive 2min og 10sek
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`; //udskriver det hele samlet til en streng. "0" gør at der tilføjes et 0 foran de sekunder der ikke er to tal
  };

  return (
    <div className="bg-customPink">
      <h3>Din reservation udløber om: {formatTime(timeLeft)}</h3>
      <button onClick={handleConfirm}>Bekræft Reservation</button>
    </div>
  );
};

export default ReservationTimer;
