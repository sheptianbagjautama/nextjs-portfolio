import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

const Switch = ({
  activeButton,
  hiddenButton,
  setActiveButton,
}: SwitchProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hover: { scale: 1.2 },
    hidden: { scale: 0.5, opacity: 0, y: 50 },
  };

  return (
    <div>
      <AnimatePresence>
        {isHovered && (
          <motion.button
            key="languangeSwitcher"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={switchVariants}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-center w-[2rem] h-[2rem]"
          >
            <p className="text-sm font-semibold">{hiddenButton}</p>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-white 
        w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5] rounded-full flex items-center justify-center
        outline-none  dark:border-white border-opacity-40 shadow-2xl  dark:bg-gray-950
        "
        variants={switchVariants}
        initial="visible"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setActiveButton}
      >
        <p className="font-semibold">{activeButton}</p>
      </motion.button>
    </div>
  );
};

export default Switch;
