// npm
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// files
import { cardOnScroll } from "../animations/variants";

interface iProps {
  category: iCategories;
}

export default function CategoryItem({ category }: iProps) {
  // properties
  const { title, content, image } = category;

  return (
    <motion.section
      className="grid"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardOnScroll}
    >
      <div>
        <img
          src={require(`../assets/images/category/${image}`)}
          alt={title}
          className="shadow"
        />
      </div>
      <div className="grid__content">
        <h1 className="title">{title}</h1>
        <p className="text">{content}</p>
        <Link to={`category/${title}`} state={image}>
          <button className="btn">View</button>
        </Link>
      </div>
    </motion.section>
  );
}
