import Link from "next/link";
import { motion } from "motion/react";
const MenuList = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false); // Lukker menuen
  };

  const perspetiv = {
    open: {
      opacity: 1,
      transtion: {
        delay: 0.2,
      },
    },

    closed: {
      opacity: 0,
      transtion: {
        delay: 0.3,
      },
    },
  };
  return (
    <nav className="h-full grid items-center">
      <motion.ul
        variants={perspetiv}
        className=" flex flex-col justify-self-center  align-middle gap-7 "
      >
        <li>
          <Link
            href="/lineup"
            onClick={handleClick}
            className="text-5xl uppercase text-black font-Inter font-bold  hover:italic  duration-400 ease-in-out"
          >
            Lineup
          </Link>
        </li>
        <li>
          <Link
            href="/program"
            onClick={handleClick}
            className="text-5xl uppercase text-black font-Inter font-bold  hover:italic  duration-400 ease-in-out"
          >
            program
          </Link>
        </li>
        <li>
          <Link
            href="/payment"
            onClick={handleClick}
            className="text-5xl uppercase text-black font-Inter font-bold  hover:italic  duration-400 ease-in-out"
          >
            billetter
          </Link>
        </li>
        <li>
          <Link
            href="/"
            onClick={handleClick}
            className="text-5xl uppercase text-black font-Inter font-bold  hover:italic  duration-400 ease-in-out"
          >
            mere
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default MenuList;
