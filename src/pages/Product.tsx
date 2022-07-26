// npm
import { useParams, useNavigate } from "react-router-dom";

// files
import data from "../data/menu.json";
import Nutrients from "../components/Nutrients";
import ProductItem from "../components/ProductItem";

export default function Product() {
  // properties
  const { slug } = useParams();
  const navigate = useNavigate();

  // components
  const filteredItems = data.filter((item) => item.slug === slug);

  const productDetails = filteredItems.map((item) => (
    <ProductItem item={item} key={item.id} />
  ));

  const nutrients = filteredItems.map((item) => (
    <Nutrients item={item} key={item.id} />
  ));

  return (
    <div>
      {productDetails}
      {nutrients}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
