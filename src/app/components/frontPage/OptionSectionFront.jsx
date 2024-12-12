import Option from "./Option";

const OptionSectionFront = () => {
  return (
    <section className="grid grid-cols-[1fr_1.5fr_1fr] py-32">
      <div className="col-start-2 flex flex-wrap justify-center">
        <Option text="Program"></Option>
        <Option text="Lineup"></Option>

        <Option text="Bliv frivillig"></Option>
        <Option text="Køb billet"></Option>
      </div>
    </section>
  );
};

export default OptionSectionFront;
