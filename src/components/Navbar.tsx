// npm
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const { scrollY } = useScroll() as any;

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

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      display: "flex",
    },
    hidden: {
      opacity: 0,
      y: -25,
      display: "none",
    },
  };

  return (
    <motion.nav
      className={`nav ${showLogo ? "scroll-bg" : "none"}`}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="nav__wrapper">
        <div className="nav__wrapper--inner">
          <button className="burger">
            <div className="burger__line" />
            <div className="burger__line" />
            <div className="burger__line" />
          </button>

          <ul className="nav__links">
            <Link to={"category/dishes"} className="link">
              Dishes
            </Link>
            <Link to={"category/dessert"} className="link">
              Dessert
            </Link>
            <Link to={"category/drink"} className="link">
              Drinks
            </Link>
          </ul>
          <ul>
            <Link to={"contact"} className="link btn">
              contact
            </Link>
          </ul>
        </div>
        <motion.div
          className="nav__wrapper--outer"
          variants={variants}
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
