// npm

// files
import CategoryItem from "../components/CategoryItem";
import data from "../data/categories.json";

export default function Home() {
  // components
  const categoryItems = data.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return <div>{categoryItems}</div>;
}
