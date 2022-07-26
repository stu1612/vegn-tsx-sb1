import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to={"/"} style={{ padding: "1rem" }}>
        home
      </Link>
      <Link to={"category/dishes"} style={{ padding: "1rem" }}>
        dishes
      </Link>
      <Link to={"category/dessert"} style={{ padding: "1rem" }}>
        dessert
      </Link>
      <Link to={"category/drink"} style={{ padding: "1rem" }}>
        drinks
      </Link>
      <Link to={"contact"} style={{ padding: "1rem" }}>
        contact
      </Link>
    </nav>
  );
}
