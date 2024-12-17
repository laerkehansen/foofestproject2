const Kvitering = ({ formData }) => {
  // const { vipCount, regularCount } = ticketData;
  // const { vipCount, regularCount } = formData;
  const { vipCount = 0, regularCount = 0 } = formData;
  const vipPrice = 1299;
  const regularPrice = 799;
  const tent2p = 299;
  const tent3p = 399;
  const booking = 99;
  const greenCamping = 249;

  const totalPrice = vipCount * vipPrice + regularCount * regularPrice;

  const totalTick = vipCount + regularCount;

  // vip = 1299
  //reguler = 799

  // tent2p = 299
  // tent3p =399

  //bookin fee = 99

  //gren camping = 249

  return (
    <div className="bg-[#E7E7E7] px-4 w-72 lg:col-start-2 md:col-start-1 sm:col-start-1 place-self-center py-2 my-10  lg:row-span-2 lg:row-start-1  ">
      <div className="">
        <p>Valgte billetter:</p>
        <ul>
          <li>VIP Billetter: {formData.vipCount} </li>
          <li>Regular Billetter: {formData.regularCount}</li>
        </ul>
      </div>
      <p className="uppercase leading-[0.7] font-bold text-2xl text-center italic pt-4 pb-2 ">
        foo <br />
        fest
      </p>
      <div className=" max-w-72 flex flex-col gap-1  font-normal  text-base ">
        <p className="font-bold text-mid py-2">ticekts</p>

        <div className="flex justify-between">
          <p>vip({regularCount})</p>
          <p className="font-semibold">999,-</p>
        </div>

        <div className="flex  justify-between">
          <p>Regular(0)</p>
          <p className="font-semibold">799,-</p>
        </div>

        <p className="font-bold text-mid py-2">camping</p>
        <div className=" flex  justify-between">
          <p className="font-normal">area(area)</p>
          <p className="font-semibold">0,-</p>
        </div>
        <p className="font-bold text-mid py-2">Tent set up</p>
        <div className="flex justify-between">
          <p>tent 2p (2)</p>
          <p className="font-semibold">299,-</p>
        </div>
        <div className="flex justify-between">
          <p>tent 3p()</p>
          <p className="font-semibold">399,-</p>
        </div>
        <div className="flex justify-between">
          <p>booking fee</p>
          <p className="font-semibold">99,-</p>
        </div>
      </div>
    </div>
  );
};

export default Kvitering;
