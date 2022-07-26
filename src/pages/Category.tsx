// npm
import { useParams } from "react-router-dom";

// files
import data from "../data/menu.json";
import MenuItem from "../components/MenuItem";

export default function Category() {
  // properties
  const { title } = useParams();

  // components
  const menuItems = data
    .filter((item) => item.category === title)
    .map((item) => <MenuItem item={item} key={item.id} />);

  return (
    <div>
      <h1>{title}</h1>
      <div>{menuItems}</div>
    </div>
  );
}
