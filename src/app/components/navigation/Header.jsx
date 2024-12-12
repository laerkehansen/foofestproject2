import Menu from "./Menu";

const Header = () => {
  return (
    <header className="   fixed z-50 top-0 right-0  w-auto h-auto">
      <h1 className="uppercase text-green italic font-Inter font-bold sm:text-xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl fixed left-[25px] top-[25px]">
        foo <br /> fest
      </h1>

      <Menu />
    </header>
  );
};

export default Header;
