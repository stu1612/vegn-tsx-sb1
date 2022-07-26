import { useNavigate } from "react-router-dom";

interface iProps {
  item: iMenuItem;
}

export default function ProductItem({ item }: iProps) {
  // properties
  const { subtitle, body, ingredients } = item;
  const navigate = useNavigate();

  // components
  const Ingredients = ingredients.map((ing, index) => <p key={index}>{ing}</p>);
  return (
    <div>
      <h1>{subtitle}</h1>
      <p>{body}</p>
      <div>{Ingredients}</div>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
