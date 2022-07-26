// npm
import { Link } from "react-router-dom";

interface iProps {
  category: iCategories;
}

export default function CategoryItem({ category }: iProps) {
  // properties
  const { title, content, image } = category;

  return (
    <div className="category-item">
      <img src={require(`../assets/images/category/${image}`)} alt={title} />
      <h1>{title}</h1>
      <div className="category-item__content">
        <p>{content}</p>
        <Link to={`category/${title}`}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
}
