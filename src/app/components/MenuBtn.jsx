"use client";
import { motion, MotionConfig } from "motion/react";
import { useState } from "react";
const MenuBtn = ({ toggle }) => {
  //   const [active, setActive] = useState(false);
  //   console.log(active);

  return (
    <MotionConfig
      transition={{
        duration: "0.5",
        ease: "easeInOut",
      }}
      // er en spimle context provider som er fra motion som skupper værdier ned til dens børn her fx transition
    >
      <motion.button
        onClick={toggle}
        className="justify-self-end relative h-[3.75rem] w-[3.75rem] rounded-full bg-white/0 transition-colors hover:bg-white/20"
        //   animate={active ? "open " : "closed"}
      >
        <motion.span
          className="absolute h-1 w-7 bg-white left-1/2 top-[35%] "
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: [, "45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          className="absolute h-1 w-7 bg-white"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: [, "-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-1 w-4 bg-white"
          style={{
            left: "calc(50% + 6px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: [, "45deg", "0deg", "0deg"],
              left: "calc(50% + 6px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default MenuBtn;
