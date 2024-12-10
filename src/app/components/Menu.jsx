"use client";
import { useState } from "react";
import { motion } from "motion/react";
import MenuBtn from "./MenuBtn";

import MenuList from "./MenuList";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Skifter mellem åben og lukket tilstand ved klik
  };

  // Variants til animationstilstande
  //   const menuVariants = {
  //     closed: {
  //       height: "2.5rem", // h-10
  //       width: "2.5rem", // w-10
  //       borderRadius: "50%", // rounded-full
  //       top: "1rem", // Justering for at holde det i øverste hjørne
  //       right: "1rem",
  //       backgroundColor: "oklch(77.42% 0.2693 147.49)", // bg-white/0
  //       transition: {
  //         duration: 0.5,
  //         ease: "easeInOut",
  //       },
  //     },
  //     open: {
  //       height: "100vh", // Fylder hele skærmen
  //       width: "100vw",
  //       borderRadius: "0%", // Ingen afrundede hjørner
  //       backgroundColor: "oklch(77.42% 0.2693 147.49)", // bg-white/20
  //       transition: {
  //         duration: 0.5,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };
  return (
    <motion.div
      className={`grid bg-customPink ${
        isOpen
          ? "absolute w-full h-screen z-50 inset-0 p-4 "
          : "rounded-full h-20 w-20"
      }`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      //   variants={menuVariants}
    >
      <MenuBtn toggle={toggleMenu} />
      {isOpen && <MenuList />}
    </motion.div>
  );
};

export default Menu;
