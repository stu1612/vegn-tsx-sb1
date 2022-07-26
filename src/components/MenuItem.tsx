// npm
import { Link } from "react-router-dom";

interface iProps {
  item: iMenuItem;
}

export default function MenuItem({ item }: iProps) {
  const { slug, subtitle, body } = item;

  return (
    <div className="category-item">
      <h1>{subtitle}</h1>
      <div className="category-item__content">
        <p>{body}</p>
        <Link to={`${slug}`}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
}
