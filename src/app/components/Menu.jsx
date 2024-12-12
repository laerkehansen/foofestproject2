"use client";
// import Styles from "../style/menu.css";
import "../style/menu.css"; // Importer global CSS
import { useState } from "react";
import { motion } from "motion/react";
import MenuBtn from "./MenuBtn";

import MenuList from "./MenuList";

const variants = {
  open: {
    height: "100svh",
    width: "100svw",
    borderRadius: 0,
    top: "0px",
    right: "0px",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    top: "25px",
    right: "25px",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        className="menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        {isOpen && <MenuList setIsOpen={setIsOpen} />}
      </motion.div>

      <div className="menuBtn">
        <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Menu;
