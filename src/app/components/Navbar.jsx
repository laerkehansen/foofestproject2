"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/img/logo.svg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  //her laver vi vores state til vores burgermenu
  const [menuOpen, setMenuOpen] = useState(false); //den er false fordi den starter med at være lukket

  const handleNav = () => {
    setMenuOpen(!menuOpen); //vi sætter den til det modsatte
  };

  return (
    <nav className="fixed w-full bg-transparent z-20 pt-6">
      <div className="flex justify-between items-center h-full w-full px-10">
        <Link href="/">
          <Logo />
          {/* <Image src={Logo} width={98} height={38} alt="logo" /> */}
        </Link>
        <div onClick={handleNav} className="cursor-pointer">
          <RxHamburgerMenu size={35} className="text-green" />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-full h-full bg-slate-300 p-10 ease-in duration-300" //hvis det er sandt at den er klikket, hvis følgende
            : "fixed right-[-100%] top-0  p-10 ease-in duration-300" //hvis det er falsk vis følgende
        }
      >
        <div className="full w-full items-center justify-end">
          <div onClick={handleNav}>
            <RxCross2 size={35} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="gap-6">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="Hover:border-b text-3xl"
              >
                {" "}
                {/* lukker menuen når man klikker*/}
                Kontakt
              </li>
            </Link>
            <Link href="/lineup">
              <li
                onClick={() => setMenuOpen(false)}
                className="Hover:border-b text-3xl"
              >
                Lineup
              </li>
            </Link>
            <Link href="/program">
              <li
                onClick={() => setMenuOpen(false)}
                className="Hover:border-b text-3xl"
              >
                Program
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
