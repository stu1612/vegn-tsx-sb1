// npm
import { motion } from "framer-motion";

// files
import { top, center, bottom } from "../animations/variants";

interface iProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}

export default function MenuButton({ isOpen, setIsOpen }: iProps) {
  // methods
  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.button
      className={`burger ${isOpen ? "active" : ""}`}
      onClick={() => toggleNav()}
    >
      <motion.div
        className="burger__line"
        variants={top}
        animate={!isOpen ? "closed" : "open"}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      />
      <motion.div
        className="burger__line"
        variants={center}
        animate={!isOpen ? "closed" : "open"}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      />
      <motion.div
        className="burger__line"
        variants={bottom}
        animate={!isOpen ? "closed" : "open"}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      />
    </motion.button>
  );
}
