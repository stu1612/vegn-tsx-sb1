// npm
import { useState, useCallback, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// files
import CategoryItem from "../components/CategoryItem";
import data from "../data/categories.json";
// images
import img from "../assets/images/general/hero.jpg";
import Wave from "../components/Wave";

export default function Home() {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll() as any;

  const updateScrollPosition = useCallback(() => {
    if (scrollY?.current > 50) {
      setHidden(true);
    }
  }, [scrollY]);

  useEffect(() => {
    return scrollY.onChange(() => updateScrollPosition());
  }, [scrollY, updateScrollPosition]);

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  // components
  const categoryItems = data.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return (
    <main className="home">
      <section className="hero">
        <motion.h1
          variants={variants}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          Vegarian
        </motion.h1>
        <img src={img} alt="vegan foods on display" />
        <Wave />
      </section>

      {categoryItems}
    </main>
  );
}
