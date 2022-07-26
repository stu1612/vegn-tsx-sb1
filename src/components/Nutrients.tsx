interface iProps {
  item: iMenuItem;
}

export default function Nutrients({ item }: iProps) {
  const { nutrients } = item;

  return (
    <div>
      <h1>Nutrients</h1>
      <p>{nutrients[0]}</p>
      <p>{nutrients[1]}</p>
      <p>{nutrients[2]}</p>
      <p>{nutrients[3]}</p>
      <p>{nutrients[4]}</p>
      <p>{nutrients[5]}</p>
    </div>
  );
}
