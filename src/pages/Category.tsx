// npm
import { useParams, useLocation } from "react-router-dom";

// files
import data from "../data/menu.json";
import MenuItem from "../components/MenuItem";
import Wave from "../components/Wave";

interface iLocationState {
  image: string;
}

export default function Category() {
  // properties
  const { title } = useParams();
  const location = useLocation();
  const image = location.state as iLocationState;

  // components
  const menuItems = data
    .filter((item) => item.category === title)
    .map((item) => <MenuItem item={item} key={item.id} />);

  return (
    <main>
      <section className="hero">
        <img
          className="secondary-banner"
          src={require(`../assets/images/category/${image}`)}
          alt={title}
        />
        <h1 className="bright heading-title">{title}</h1>
        <Wave />
      </section>
      {menuItems}
    </main>
  );
}
