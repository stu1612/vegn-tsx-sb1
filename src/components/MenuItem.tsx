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
          className="card-img menu-img"
        />
      </div>
      <div className="col col__text">
        <h1 className="card-title">{subtitle}</h1>
        <div className="category-item__content">
          <p>{body}</p>
          <Link to={`${slug}`}>
            <button className="btn">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
