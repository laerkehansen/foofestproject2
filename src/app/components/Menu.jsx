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
      //   className={`grid bg-customPink ${
      //     isOpen
      //       ? "absolute w-full h-screen  inset-0 z-50 p-4  "
      //       : "rounded-full  h-[3.75rem] w-[3.75rem]"
      //   }`}
      className=" bg-customPink absolute h-[3.75rem] w-[3.75rem] rounded-full z-30 "
      initial={false}
      animate={isOpen ? "open" : "closed"}
      style={{
        width: "3,75rem",
        height: "3,75rem",
        borderRadius: "50%",
        top: "2rem",
        right: "2rem",
        x: "3,75rem",
        y: "3,75rem",

        // position: "absolute",
      }}
      variants={{
        open: {
          width: ["3,75rem", "3,75rem", "100svh"],
          height: ["3,75rem", "3,75rem", "100svh"],
          borderRadius: ["50%", "50%", "0"],
          position: ["absolute"],
          x: ["3,75rem", "3,75rem", "100svh"],
          y: ["3,75rem", "3,75rem", "100svh"],
          top: ["2rem", "2rem", "0"],
          right: ["2rem", "2rem", "0"],
        },
        closed: {
          width: ["100svh", "3,75rem", "3,75rem"],
          height: ["100svh", "3,75rem", "3,75rem"],
          borderRadius: ["0", "50%", "50%"],
          top: ["0", "2rem", "2rem"],
          right: ["0", "2rem", "2rem"],
        },
      }}
      transition={{
        duration: "5",
        ease: "easeInOut",
      }}
    >
      <MenuBtn toggle={toggleMenu} />
      {isOpen && <MenuList toggle={toggleMenu} />}
    </motion.div>
  );
};

export default Menu;
