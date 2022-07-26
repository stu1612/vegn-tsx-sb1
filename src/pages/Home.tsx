// files
import CategoryItem from "../components/CategoryItem";
import data from "../data/categories.json";
// images
import img from "../assets/images/general/hero.jpg";

export default function Home() {
  // components
  const categoryItems = data.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return (
    <div className="home">
      <div className="hero">
        <img src={img} alt="" />
      </div>

      {categoryItems}
    </div>
  );
}
