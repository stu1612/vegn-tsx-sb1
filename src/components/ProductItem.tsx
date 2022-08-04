// npm
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface iProps {
  item: iMenuItem;
}

export default function ProductItem({ item }: iProps) {
  // local state
  const [open, setOpen] = useState<boolean>(false);
  // properties
  const { subtitle, body, ingredients } = item;

  // components
  const Ingredients = ingredients.map((ing, index) => <p key={index}>{ing}</p>);
  return (
    <div className="content">
      <h1>{subtitle}</h1>
      <p>{body}</p>
      <button
        className={`btn-dropdown ${open && "selected"}`}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="icon" />
        )}
        Ingredients
      </button>
      {open && <div className="ingredients">{Ingredients}</div>}
    </div>
  );
}
