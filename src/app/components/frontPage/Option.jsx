const Option = ({ text }) => {
  return (
    <div className="border-black border-4 py-4 px-8 w-64 text-center items-center gap-4 justify-center hover:bg-green m-5">
      <p className="text-black font-Inter text-4xl font-semibold hover:text-black">
        {text}
      </p>
    </div>
  );
};

export default Option;
