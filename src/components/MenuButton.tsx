// npm
import { motion } from "framer-motion";

interface iProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}

export default function MenuButton({ isOpen, setIsOpen }: iProps) {
  // methods
  function toggleNav() {
    setIsOpen(!isOpen);
  }

  const top = {
    open: {
      opacity: [0, 1],
      rotate: 180,
    },
    closed: {
      opacity: 1,
    },
  };

  const center = {
    open: {
      opacity: 0,
      width: "2.5rem",
    },
    closed: {
      opacity: 1,
    },
  };

  const bottom = {
    open: {
      opacity: [0, 1],
      rotate: -180,
      width: "1.5rem",
    },
    closed: {
      opacity: 1,
    },
  };

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
