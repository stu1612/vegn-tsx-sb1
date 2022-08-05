// npm
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// files
import { cardOnScroll } from "../animations/variants";

interface iProps {
  item: iMenuItem;
}

export default function MenuItem({ item }: iProps) {
  const { slug, subtitle, thumbnail, body } = item;

  return (
    <motion.div
      className="sub-grid"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardOnScroll}
    >
      <div className="sub-grid__img">
        <img
          src={require(`../assets/images/menu/${thumbnail}`)}
          alt={subtitle}
          className="shadow img-350"
        />
      </div>
      <div className="sub-grid__content">
        <h1 className="title">{subtitle}</h1>
        <p className="text">{body}</p>
        <Link to={`${slug}`} state={thumbnail}>
          <button className="btn">View</button>
        </Link>
      </div>
    </motion.div>
  );
}
