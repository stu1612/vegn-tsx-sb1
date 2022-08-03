// npm
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

// files
import { navVariant } from "../animations/variants";
import data from "../data/navLinks.json";
import MenuButton from "./MenuButton";

export default function Navbar() {
  // local state
  const [hidden, setHidden] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // properties
  const { scrollY } = useScroll() as any;
  const isMobile = window.innerWidth < 1024;

  // methods
  const updateScrollPosition = useCallback(() => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      setShowLogo(true);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      setShowLogo(true);
    }
  }, [scrollY]);

  useEffect(() => {
    return scrollY.onChange(() => updateScrollPosition());
  }, [scrollY, updateScrollPosition]);

  // components
  const navLinks = data.map((links) => (
    <Link
      to={links.link}
      state={links.image}
      className={links.class}
      key={links.id}
      onClick={() => setIsOpen(false)}
    >
      {links.title}
    </Link>
  ));

  return (
    <motion.nav
      className={`nav light ${showLogo ? "scroll-bg" : ""} ${
        isOpen ? "mobile" : ""
      }`}
      variants={!isMobile && (navVariant as any)}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="nav__wrapper">
        <div className="nav__wrapper--inner">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <ul className={`links ${isOpen && "links-mobile"}`}>
            <div>{navLinks}</div>
          </ul>
        </div>
        <motion.div
          className={`nav__wrapper--outer ${isOpen ? "top" : "center"}`}
          variants={navVariant}
          animate={showLogo ? "visible" : "hidden"}
        >
          <Link to={"/"} className="link logo">
            vegarian
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
