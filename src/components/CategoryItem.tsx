// npm
import { Link } from "react-router-dom";

interface iProps {
  category: iCategories;
}

export default function CategoryItem({ category }: iProps) {
  // properties
  const { title, content, image } = category;

  return (
    <section className="grid">
      <div>
        <img
          src={require(`../assets/images/category/${image}`)}
          alt={title}
          className="shadow"
        />
      </div>
      <div className="grid__content">
        <h1 className="card-title">{title}</h1>
        <p>{content}</p>
        <Link to={`category/${title}`} state={image}>
          <button className="btn">View</button>
        </Link>
      </div>
    </section>
  );
}
