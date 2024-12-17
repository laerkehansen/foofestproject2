const StepBar = ({ step }) => {
  return (
    <div className="flex justify-between col-start-1   border-b-2 border-black">
      <div
        className={`flex gap-2 ${
          step > 1 ? "text-green" : step === 1 ? "text-blue-500" : "text-black"
        }`}
      >
        <p className="font-semibold">1</p>
        <p>tickets</p>
      </div>
      <div
        className={`flex gap-2 ${
          step > 2 ? "text-green" : step === 2 ? "text-blue-500" : "text-black"
        }`}
      >
        <p className="font-semibold">2</p>
        <p>personal info</p>
      </div>
      <div
        className={`flex gap-2 ${
          step > 3
            ? "text-green-500"
            : step === 3
            ? "text-blue-500"
            : "text-black"
        }`}
      >
        <p className="font-semibold">3</p>
        <p>camping</p>
      </div>
      <div
        className={`flex gap-2 ${
          step > 4
            ? "text-green-500"
            : step === 4
            ? "text-blue-500"
            : "text-black"
        }`}
      >
        <p className="font-semibold">4</p>
        <p className="text-nowrap">bekraft bestilling</p>
      </div>
      <div
        className={`flex gap-2 ${
          step > 5
            ? "text-green-500"
            : step === 5
            ? "text-blue-500"
            : "text-black"
        }`}
      >
        <p className="font-semibold">5</p>
        <p>pay ment</p>
      </div>
    </div>
  );
};

export default StepBar;
