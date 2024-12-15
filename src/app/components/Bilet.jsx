import Image from "next/image";
import Bilett from "@/app/img/bilet.svg";
import Ticket from "@/app/img/bilet.svg";
// import { ReactComponent as Ticket } from "@/app/img/bilet.svg";

const Bilet = ({ type, price }) => {
  return (
    <div className=" hover:rotate-12 ease-in-out grid grid-cols-1 grid-rows-1 text-white lg:w-[17.051rem] lg:h-[25.188rem] sm:w-[9.604rem] sm:h-[14.188rem] md:w-[12.862rem] md:h-[19rem]  ">
      <Ticket className=" row-span-1 col-span-1 lg:w-[17.051rem] lg:h-[25.188rem] sm:w-[9.604rem] sm:h-[14.188rem] md:w-[12.862rem] md:h-[19rem]" />
      <div className="col-span-1 row-span-1 z-20 flex flex-col justify-between   h-[inherit] w-[inherit] place-items-center p-4">
        <p>Festival Ticket</p>
        <h2 className="lg:text-4xl sm:text-lg font-semibold italic uppercase">
          {type}
        </h2>
        <p className=""> {price}</p>
      </div>
    </div>
  );
};

export default Bilet;
