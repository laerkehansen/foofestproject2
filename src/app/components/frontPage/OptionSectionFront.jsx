import Option from "./Option";
import Link from "next/link";

const OptionSectionFront = () => {
  return (
    <section className="grid grid-cols-[1fr_1.5fr_1fr] py-32">
      <div className="col-start-2 flex flex-wrap justify-center">
        <Link href="/program">
          <Option text="Program"></Option>
        </Link>
        <Link href="/lineup">
          <Option text="Lineup"></Option>
        </Link>

        <Link href="/">
          <Option text="Bliv frivillig"></Option>
        </Link>
        <Link href="/payment">
          <Option text="Køb billet"></Option>
        </Link>
      </div>
    </section>
  );
};

export default OptionSectionFront;
