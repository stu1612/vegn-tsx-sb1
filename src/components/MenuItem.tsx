// npm
import { Link } from "react-router-dom";

interface iProps {
  item: iMenuItem;
}

export default function MenuItem({ item }: iProps) {
  const { slug, subtitle, thumbnail, body } = item;

  return (
    <div className="sub-grid">
      <div className="sub-grid__img">
        <img
          src={require(`../assets/images/menu/${thumbnail}`)}
          alt={subtitle}
          className="shadow img-350"
        />
      </div>
      <div className="sub-grid__content">
        <h1 className="card-title">{subtitle}</h1>
        <p>{body}</p>
        <Link to={`${slug}`}>
          <button className="btn">View</button>
        </Link>
      </div>
    </div>
  );
}
