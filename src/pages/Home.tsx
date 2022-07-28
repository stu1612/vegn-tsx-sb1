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
    <main className="home">
      <section className="hero">
        <img src={img} alt="vegan foods on display" />
      </section>

      {categoryItems}
    </main>
  );
}
