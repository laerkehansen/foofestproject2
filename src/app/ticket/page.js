import Bilet from "../components/Bilet";
import Link from "next/link";
const Tickets = ({}) => {
  return (
    <div className="min-h-svh flex flex-col gap-16 m-24">
      <h1 className="text-4xl font-semibold">tickets</h1>
      <div className="flex justify-center  gap-40 items-center ">
        <Bilet type="regular" price="799" />
        <Bilet type="vip" price="799" />
      </div>
      <Link
        className=" bg-green p-2 text-black place-self-end self-end justify-self-end"
        href="/payment"
      >
        køb billetter
      </Link>
    </div>
  );
};

export default Tickets;
