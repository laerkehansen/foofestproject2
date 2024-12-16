const Kvitering = () => {
  return (
    <div className="bg-[#E7E7E7] px-4 w-72 col-start-2  py-2  ">
      <p className="uppercase leading-[0.7] font-bold text-2xl text-center italic pt-4 pb-2 ">
        foo <br />
        fest
      </p>
      <div className=" max-w-72 flex flex-col gap-1  font-normal  text-base ">
        <p className="font-bold text-mid py-2">ticekts</p>

        <div className="flex justify-between">
          <p>vip(1)</p>
          <p className="font-semibold">999,-</p>
        </div>

        <div className="flex  justify-between">
          <p>Regular(2)</p>
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
