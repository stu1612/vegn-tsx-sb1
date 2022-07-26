interface iProps {
  item: iMenuItem;
}

export default function ProductItem({ item }: iProps) {
  // properties
  const { subtitle, body, ingredients } = item;

  // components
  const Ingredients = ingredients.map((ing, index) => <p key={index}>{ing}</p>);
  return (
    <div>
      <h1>{subtitle}</h1>
      <p>{body}</p>
      <div>{Ingredients}</div>
    </div>
  );
}
