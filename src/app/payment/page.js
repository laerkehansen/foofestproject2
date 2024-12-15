"use client";

import { useState } from "react";

import TicketSelectionForm from "../components/tickets/TicketSelectionForm";
import CampingOptionsForm from "../components/tickets/CampingOptionsForm";
import PersonalInfoForm from "../components/tickets/PersonalInfoForm";
import ReviewStep from "../components/tickets/ReviewStep";

const Payment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="grid grid-cols-1 justify-items-center items-center py-20 text-black h-svh">
      {step === 1 && <TicketSelectionForm onNext={nextStep} />}
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
        <ReviewStep formData={formData} onBack={prevStep} onNext={nextStep} />
      )}
    </div>
  );
};

export default Payment;
