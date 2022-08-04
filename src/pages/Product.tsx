// npm
import { useParams, useNavigate, useLocation } from "react-router-dom";

// files
import data from "../data/menu.json";
import Nutrients from "../components/Nutrients";
import ProductItem from "../components/ProductItem";

interface iString {
  slice: any;
  thumbnail: string;
}

export default function Product() {
  // properties
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const thumbnail = location.state as iString;

  const slicedImageURL = thumbnail.slice(0, -4);
  const updatedImage = slicedImageURL + "_lg.jpg";

  // components
  const filteredItems = data.filter((item) => item.slug === slug);

  const productDetails = filteredItems.map((item) => (
    <ProductItem item={item} key={item.id} />
  ));

  const nutrients = filteredItems.map((item) => (
    <Nutrients item={item} key={item.id} />
  ));

  return (
    <main>
      <section className="sub-hero">
        <img
          src={require(`../assets/images/menu/${updatedImage}`)}
          alt={slug}
          className="tertiary-banner shadow"
        />
        {productDetails}
        {nutrients}
        <button onClick={() => navigate(-1)} className="btn">
          Go back
        </button>
      </section>
    </main>
  );
}
