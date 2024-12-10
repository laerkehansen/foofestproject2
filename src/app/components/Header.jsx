import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full  p-4  fixed z-50 top-0">
      <h1 className="uppercase text-green italic font-Inter font-bold sm:text-xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl ">
        foo <br /> fest
      </h1>
      {/* <BurgerMenuOpen /> */}
      {/* <MenuBtn /> */}
      <Menu />

      {/* <BurgerMenu /> */}
      {/* <nav className="p-10 bg-white absolute w-full h-screen z-50 inset-0">
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
