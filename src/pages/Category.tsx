// npm
import { useParams } from "react-router-dom";
import MenuItem from "../components/MenuItem";

// files
import data from "../data/menu.json";

export default function Category() {
  // properties
  const { title } = useParams();

  const items = data
    .filter((item) => item.category === title)
    .map((item) => <MenuItem item={item} key={item.id} />);

  return (
    <div>
      {title}
      {items}
    </div>
  );
}
