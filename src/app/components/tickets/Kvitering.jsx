import { KviteringContext } from "@/app/lib/KvitteringContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { discriminatedUnion } from "zod";
const Kvitering = ({ formData, liveData }) => {
  // const { cartData } = useContext(KviteringContext); // Brug contexten til at hente data
  // const cartData = useContext(KviteringContext);
  const { cartData } = useContext(KviteringContext);

  const {
    vipCount = 0,
    regularCount = 0,
    tent2p = 0,
    tent3p = 0,
    greenCamping = false,
    area,
    addTentSetup,
  } = cartData || {};

  const vipPrice = 1299;
  const regularPrice = 799;
  const fee = 99;
  const greenCampingPrice = 249;
  const tent2pPrice = 299;
  const tent3pPrice = 399;

  const totalPrice =
    vipCount * vipPrice +
    regularCount * regularPrice +
    (addTentSetup ? tent2p * tent2pPrice + tent3p * tent3pPrice : 0) +
    (greenCamping ? greenCampingPrice : 0) +
    (vipCount > 0 || regularCount > 0 ? fee : 0);

  const totalTick = vipCount + regularCount;

  return (
    <div className="bg-[#E7E7E7] px-4 w-72 lg:col-start-2 md:col-start-1 sm:col-start-1 place-self-center py- my-10   lg:row-span-2 lg:row-start-1  ">
      {/* <div className="">
        <p>Valgte billetter:</p>
        <ul>
          <li>VIP Billetter: {vipCount} </li>
          <li>Regular Billetter: {regularCount}</li>
        </ul>
      </div> */}

      <p className="uppercase leading-[0.7] font-bold text-2xl text-center italic pt-4 pb-4  border-black border-b-2  border-">
        foo <br />
        fest
      </p>

      {totalTick > 0 ? (
        <div>
          <div className=" max-w-72 flex flex-col gap-1  font-normal  text-base ">
            <p className="font-bold text-mid py-2">ticekts</p>

            {vipCount > 0 && (
              <div className="flex justify-between">
                <p>vip({vipCount})</p>
                <p className="font-semibold">1299,-</p>
              </div>
            )}
            {regularCount > 0 && (
              <div className="flex  justify-between">
                <p>Regular({regularCount})</p>
                <p className="font-semibold">799,-</p>
              </div>
            )}
            {area && (
              <div>
                <p className="font-bold text-mid py-2">camping</p>
                <div className=" flex  justify-between">
                  <p className="font-normal">area({area})</p>
                  <p className="font-semibold">0,-</p>
                </div>
              </div>
            )}
            {addTentSetup && (
              <div>
                <p className="font-bold text-mid py-2">Tent set up</p>

                {tent2p > 0 && (
                  <div className="flex justify-between">
                    <p>tent 2p ({tent2p})</p>
                    <p className="font-semibold">299,-</p>
                  </div>
                )}
                {tent3p > 0 && (
                  <div className="flex justify-between">
                    <p>tent 3p({tent3p})</p>
                    <p className="font-semibold">399,-</p>
                  </div>
                )}
              </div>
            )}
            {greenCamping && (
              <div className="flex justify-between">
                <p>greenCamping({greenCamping})</p>
                <p className="font-semibold">249,-</p>
              </div>
            )}
            <div className="flex justify-between">
              <p>booking fee</p>
              <p className="font-semibold">99,-</p>
            </div>
          </div>
          <div className="bg-gray-400 px-4 py-5 flex justify-between">
            <p className="font-bold">Total pris</p>
            <p className="font-medium">{totalPrice},-</p>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <p className="text-center">Din kurv er tom</p>
        </div>
      )}
    </div>
  );
};

export default Kvitering;
