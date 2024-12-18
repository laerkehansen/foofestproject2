import { motion } from "motion/react";

const StepBar = ({ step }) => {
  const steps = [
    { id: 1, label: "Billetter" },
    { id: 2, label: "Informationer" },
    { id: 3, label: "Camping" },
    { id: 4, label: "Bekræft " },
    { id: 5, label: "Betaling" },
  ];

  const calculateWidth = () => `${(step / steps.length) * 100}%`;

  return (
    <div className="relative col-span-full ">
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 "></div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-customPink"
        initial={{ width: "0%" }}
        animate={{ width: calculateWidth() }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Steps */}
      <div className="flex pt-4 flex-wrap justify-center">
        {steps.map(({ id, label }) => (
          <div key={id} className="flex items-center px-8 py-4">
            {/* Circle Indicator */}
            <div
              className={`flex items-center justify-center sm:flex-col ${
                step >= id
                  ? " text-customPink text-lg border-b-pink"
                  : "border-gray-300"
              }`}
            >
              <p className="font-semibold">{id}</p>

              {/* Label */}
              <p
                className={` md:text-lg lg:text-lg sm:text-xs ${
                  step === id
                    ? "text-customPink font-bold"
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
