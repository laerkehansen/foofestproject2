"use client";

import { useState } from "react";

import TicketSelectionForm from "../components/tickets/TicketSelectionForm";
import CampingOptionsForm from "../components/tickets/CampingOptionsForm";
import PersonalInfoForm from "../components/tickets/PersonalInfoForm";
import ReviewStep from "../components/tickets/ReviewStep";
import StepBar from "../components/tickets/StepBar";
import Kvitering from "../components/tickets/Kvitering";
// import { KviteringContext } from "../lib/KvitteringContext";
import { KviteringProvider } from "../lib/KvitteringContext"; // Korriger stien til din KvitteringContext-fil

const Payment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

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
        <div className="grid grid-cols-[1fr_0.5fr]  m-20  p-4 gap-4 text-black border-2 border-black bg-white">
          <StepBar step={step} />
          <div className="col-start-1">
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
              <ReviewStep
                formData={formData}
                onBack={prevStep}
                onNext={nextStep}
              />
            )}
          </div>
          <Kvitering formData={formData} />
        </div>
      </KviteringProvider>
    </div>
  );
};

export default Payment;
