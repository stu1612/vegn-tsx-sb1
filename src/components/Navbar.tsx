// npm
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div className="nav__wrapper--inner">
          <button className="burger">
            <div className="burger__line" />
            <div className="burger__line" />
            <div className="burger__line" />
          </button>

          <ul className="nav__links">
            <Link to={"category/dishes"} className="link">
              Dishes
            </Link>
            <Link to={"category/dessert"} className="link">
              Dessert
            </Link>
            <Link to={"category/drink"} className="link">
              Drinks
            </Link>
          </ul>
          <ul>
            <Link to={"contact"} className="link btn">
              contact
            </Link>
          </ul>
        </div>
        <div className="nav__wrapper--outer">
          <Link to={"/"} className="link logo">
            vegarian
          </Link>
        </div>
      </div>
    </nav>
  );
}
