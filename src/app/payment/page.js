"use client";

import { useState } from "react";

import TicketSelectionForm from "../components/tickets/TicketSelectionForm";
import CampingOptionsForm from "../components/tickets/CampingOptionsForm";
import PersonalInfoForm from "../components/tickets/PersonalInfoForm";
import ReviewStep from "../components/tickets/PaymentStep";
import PaymentStep from "../components/tickets/PaymentStep";
import StepBar from "../components/tickets/StepBar";
import Kvitering from "../components/tickets/Kvitering";
// import { KviteringContext } from "../lib/KvitteringContext";
import { KviteringProvider } from "../lib/KvitteringContext"; // Korriger stien til din KvitteringContext-fil
import ReservationTimer from "../components/tickets/ReservationTimer";

const Payment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  // const handleReservation = (id) => {
  //   startReservation(id);
  // };

  // const handleTimeout = (id) => {
  //   console.log(`Reservation ${id} timed out.`);
  // };

  // const handleConfirm = (id) => {
  //   console.log(`Reservation ${id} confirmed.`);
  // };

  // const [ticketData, setTicketData] = useState({
  //   vipCount: 0,
  //   regularCount: 0,
  // });

  // const [liveData, setLiveData] = useState({});

  // Denne funktion modtager data fra formularen og opdaterer liveData
  // const handleWatchChange = (data) => {
  //   setLiveData((prev) => ({
  //     ...prev,
  //     ...data, // Opdaterer liveData med de nye værdier
  //   }));
  // };

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  // const handleWatchChange = (data) => {
  //   setLiveData((prev) => ({ ...prev, ...data }));
  // };

  // Håndter overvågningsdata fra TicketSelectionForm
  // const handleWatchChange = (data) => {
  //   setTicketData(data);
  // };

  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="grid lg:grid-cols-[1fr] justify-between py-20">
      <KviteringProvider>
        <StepBar step={step} />
        <div className=" grid md:grid-cols-[1fr_0.4fr] sm:grid-cols-1 sm:justify-center py-16 col-span-full gap-4 max-sm:justify-items-center">
          <div className="">
            {step === 1 && <TicketSelectionForm onNext={nextStep} />}
            {step === 2 && (
              <PersonalInfoForm
                formData={formData}
                onBack={prevStep}
                onNext={nextStep}
              />
            )}
            {step === 3 && (
              <CampingOptionsForm
                onBack={prevStep}
                onNext={nextStep}
                formData={formData}
              />
            )}
            {step === 4 && (
              <div>
                {/* <ReviewStep
                  formData={formData}
                  onBack={prevStep}
                  onNext={nextStep}
                /> */}
                <PaymentStep
                  formData={formData}
                  onBack={prevStep}
                  onNext={nextStep}
                />
                <ReservationTimer
                // onTimeout={handleTimeout}
                // onConfirm={handleConfirm}
                />
              </div>
            )}
            {step === 5 && (
              <div>
                {/* <PaymentStep
                  formData={formData}
                  onBack={prevStep}
                  onNext={nextStep}
                />
                <ReservationTimer /> */}
                <h1>du har fuldført din ordre</h1>
              </div>
            )}
          </div>
          <Kvitering formData={formData} />
        </div>
      </KviteringProvider>
    </div>
  );
};

export default Payment;
