import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="   fixed z-50 top-0 right-0  w-auto h-auto">
      <Link href="/">
        <h1 className="uppercase text-green italic font-Inter font-bold sm:text-xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl fixed left-[25px] top-[25px]">
          foo <br /> fest
        </h1>
      </Link>

      <Menu />
    </header>
  );
};

export default Header;
