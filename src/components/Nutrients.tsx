interface iProps {
  item: iMenuItem;
}

export default function Nutrients({ item }: iProps) {
  // properties
  const { nutrients } = item;

  return (
    <div className="nutrients">
      <div className="row">
        <p>Calories 200</p>
        <p>Calories from Fat 78</p>
      </div>
      <div className="end">
        <p>% Daily Value</p>
      </div>
      <div className="wrapper">
        <div className="row">
          <p>
            Total Fat <span className="light">9g</span>
          </p>
          <p>{nutrients[0]}</p>
        </div>
        <div className="inline-row">
          <p className="light">Saturated Fat 3g</p>
          <p>{nutrients[1]}</p>
        </div>
      </div>
      <div className="wrapper row">
        <p>
          Cholestral <span className="light">20g</span>
        </p>
        <p>{nutrients[2]}</p>
      </div>
      <div className="wrapper row">
        <p>
          Sodium <span className="light">358g</span>
        </p>
        <p>{nutrients[3]}</p>
      </div>
      <div className="wrapper">
        <div className="row">
          <p>
            Total Carbohydrate <span className="light">21g</span>
          </p>
          <p>{nutrients[4]}</p>
        </div>
        <div className="inline-row">
          <p className="light">Dietery Fiber 1g</p>
          <p>{nutrients[5]}</p>
        </div>
      </div>
      <div className="wrapper start">
        <p>
          Protein <span className="light">8mg</span>
        </p>
      </div>
    </div>
  );
}
