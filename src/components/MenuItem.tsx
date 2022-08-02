// npm
import { Link } from "react-router-dom";

interface iProps {
  item: iMenuItem;
}

export default function MenuItem({ item }: iProps) {
  const { slug, subtitle, thumbnail, body } = item;

  return (
    <div className="sub-grid">
      <div className="col  col__img">
        <img
          src={require(`../assets/images/menu/${thumbnail}`)}
          alt={subtitle}
          style={{ height: "250px", width: "250px" }}
        />
      </div>
      <div className="col col__text">
        <h1>{subtitle}</h1>
        <div className="category-item__content">
          <p>{body}</p>
          <Link to={`${slug}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
