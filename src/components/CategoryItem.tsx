// npm
import { Link } from "react-router-dom";

interface iProps {
  category: iCategories;
}

export default function CategoryItem({ category }: iProps) {
  // properties
  const { title, content } = category;

  return (
    <div className="category-item">
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
