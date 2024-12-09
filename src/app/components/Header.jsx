import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-transparent">
      <h1>hey</h1>
      {/* <BurgerMenuOpen /> */}
      {/* <MenuBtn /> */}
      <Menu />
      {/* <BurgerMenu /> */}
    </header>
  );
};

export default Header;
