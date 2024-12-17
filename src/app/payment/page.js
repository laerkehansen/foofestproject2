"use client";

import { useState } from "react";

import TicketSelectionForm from "../components/tickets/TicketSelectionForm";
import CampingOptionsForm from "../components/tickets/CampingOptionsForm";
import PersonalInfoForm from "../components/tickets/PersonalInfoForm";
import ReviewStep from "../components/tickets/ReviewStep";
import StepBar from "../components/tickets/StepBar";
import Kvitering from "../components/tickets/Kvitering";

const Payment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [liveData, setLiveData] = useState({});
  // const [ticketData, setTicketData] = useState({
  //   vipCount: 0,
  //   regularCount: 0,
  // });

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  // sender live data med
  // const handleWatchChange = (data) => {
  //   setLiveData((prev) => ({ ...prev, ...data }));
  // };

  // Funktion til at opdatere liveData, når der er ændringer i formularen
  const handleWatchChange = (data) => {
    // Kun opdater, hvis der er forskel i de data, der modtages
    setLiveData((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(data)) {
        return { ...prev, ...data };
      }
      return prev;
    });
  };

  // Håndter overvågningsdata fra TicketSelectionForm
  // const handleWatchChange = (data) => {
  //   setTicketData(data);
  // };

  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div>
      <div className="grid lg:grid-cols-[auto_auto] sm:grid-cols-1 md:grid-cols-1 m-20  p-4 gap-4 text-black border-2 border-black bg-white">
        <StepBar step={step} />
        <div className="col-start-1">
          {step === 1 && (
            <TicketSelectionForm
              onNext={nextStep}
              onWatchChange={handleWatchChange}
            />
          )}
          {step === 2 && (
            <CampingOptionsForm
              onBack={prevStep}
              onNext={nextStep}
              formData={formData}
            />
          )}
          {step === 3 && (
            <PersonalInfoForm
              formData={formData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}
          {step === 4 && (
            <ReviewStep
              formData={formData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}
        </div>
        <Kvitering
          // formData={formData}
          formData={{ ...formData, ...liveData }}
        />
      </div>
    </div>
  );
};

export default Payment;
