// npm
import { useState } from "react";
import { Link } from "react-router-dom";

interface iProps {
  category: iCategories;
}

export default function CategoryItem({ category }: iProps) {
  // properties
  const { title, content, image } = category;
  // const [categoryData] = useState(category);

  return (
    <section className="category-item grid">
      <div className="col">
        <img
          src={require(`../assets/images/category/${image}`)}
          alt={title}
          className="card-img"
        />
      </div>
      <div className="category-item__content col">
        <h1>{title}</h1>
        <p>{content}</p>
        <Link to={`category/${title}`} state={image}>
          <button className="btn">View</button>
        </Link>
      </div>
    </section>
  );
}
