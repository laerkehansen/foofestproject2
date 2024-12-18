import Bilet from "../components/Bilet";
// import Link from "next/link";
import Button from "../components/frontPage/LinkKnap";
const Tickets = ({}) => {
  return (
    <div className="min-h-svh flex flex-col gap-16 lg:m-24 sm:m-8">
      <h1 className="lg:text-7xl md:text-7xl sm:text-2xl font-bold text-center italic uppercase">
        billetter typer
      </h1>
      <div className="flex justify-center lg:flex-row md:flex-row sm:flex-col  lg:gap-32 sm:gap-10 items-center ">
        <Bilet type="regular" price="799,-" />
        <Bilet type="vip" price="1299,-" />
      </div>
      {/* <Link
        className=" bg-green p-2 text-black place-self-end self-end justify-self-end"
        href="/payment"
      >
        køb billetter
      </Link> */}

      <Button text="køb billetter" link="program" />
    </div>
  );
};

export default Tickets;
