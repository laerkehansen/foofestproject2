import { motion } from "motion/react";

const StepBar = ({ step }) => {
  const steps = [
    { id: 1, label: "tickets" },
    { id: 2, label: "personal info" },
    { id: 3, label: "camping" },
    { id: 4, label: "bekræft bestilling" },
    { id: 5, label: "payment" },
  ];

  const calculateWidth = () => `${(step / steps.length) * 100}%`;

  return (
    <div className="relative w-full">
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: calculateWidth() }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Steps */}
      <div className="flex justify-between items-center pt-4">
        {steps.map(({ id, label }) => (
          <div key={id} className="flex items-center px-10">
            {/* Circle Indicator */}
            <div
              className={`flex items-center justify-center  ${
                step >= id ? " text-black text-lg" : "border-gray-300"
              }`}
            >
              <p className="font-semibold">{id}</p>

              {/* Label */}
              <p
                className={` text-lg ${
                  step === id
                    ? "text-blue-500 font-bold"
                    : step > id
                    ? "text-gray-500"
                    : "text-gray-400"
                } sm:hidden md:block lg:block`}
              >
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
