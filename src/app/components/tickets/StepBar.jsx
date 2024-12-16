const StepBar = () => {
  return (
    <div className="flex justify-between col-start-1   border-b-2 border-black">
      <div className="flex gap-2">
        <p className="font-semibold">1</p>
        <p>tickets</p>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">2</p>
        <p>personal info</p>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">3</p>
        <p>camping</p>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">4</p>
        <p className="text-nowrap">bekraft bestilling</p>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">5</p>
        <p>pay ment</p>
      </div>
    </div>
  );
};

export default StepBar;
