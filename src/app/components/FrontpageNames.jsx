const FrontPageNames = ({ data }) => {
  const { name } = data;
  return (
    <div className="grid gap-6 pb-10">
      <h2 className="text-6xl text-black text-center font-Inter italic font-black">
        Band List
      </h2>
      <ul className="flex flex-wrap gap-3 items-center justify-center px-10">
        {data.slice(0, 22).map((band, index) => (
          <li
            key={name}
            className="h-fit w-fit border-black border-4 text-black p-4 font-Inter text-xl font-medium"
          >
            {band.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrontPageNames;
