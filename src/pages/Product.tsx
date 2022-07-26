// npm
import { useParams } from "react-router-dom";

// files
import data from "../data/menu.json";
import Nutrients from "../components/Nutrients";
import ProductItem from "../components/ProductItem";

export default function Product() {
  // properties
  const { slug } = useParams();

  // components
  const filteredItems = data.filter((item) => item.slug === slug);

  const productDetails = filteredItems.map((item) => (
    <ProductItem item={item} key={item.id} />
  ));

  const nutrientDetails = filteredItems.map((item) => (
    <Nutrients item={item} key={item.id} />
  ));

  return (
    <div>
      {productDetails}
      {nutrientDetails}
    </div>
  );
}
