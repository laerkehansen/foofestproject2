import Image from "next/image";
import Bilett from "@/app/img/bilet.svg";
import Ticket from "@/app/img/bilet.svg";
// import { ReactComponent as Ticket } from "@/app/img/bilet.svg";

const Bilet = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:w-[17.051rem] lg:h-[25.188rem] sm:w-[9.604rem] sm:h-[14.188rem] md:w-[12.862rem] md:h-[19rem]  ">
      {/* <Image src={Bilett} alt="hey" className="row-span-1 col-span-1" /> */}
      <Ticket className="row-span-1 col-span-1 lg:w-[17.051rem] lg:h-[25.188rem] sm:w-[9.604rem] sm:h-[14.188rem] md:w-[12.862rem] md:h-[19rem]" />
      <div className="col-span-1 row-span-1 z-20 flex flex-col justify-between  h-[inherit] place-items-center p-2">
        <p>bilet</p>
        <h2 className=" z-10">Reguler</h2>
        <p className=""> 799,-</p>
      </div>
    </div>
  );
};

export default Bilet;
