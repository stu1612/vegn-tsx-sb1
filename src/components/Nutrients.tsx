// npm
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// files
import data from "../data/nutrients.json";

interface iProps {
  item: iMenuItem;
}

export default function Nutrients({ item }: iProps) {
  // local state
  const [open, setOpen] = useState<boolean>(true);

  // properties
  const { nutrients } = item;

  // components
  const items = data.map((item) => item);

  const a = items[0];
  const b = items[1];
  const c = items[2];
  const d = items[3];
  const e = items[4];
  const f = items[5];
  const g = items[6];

  return (
    <section id="nutrients">
      <button
        className={`btn-dropdown ${open && "selected"}`}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="icon" />
        )}
        Nutrients
      </button>
      {open && (
        <div className="nutrients">
          <div className="row">
            <p>{a.tx_1}</p>
            <p>{a.tx_2}</p>
          </div>
          <div className="end">
            <p>{b.tx_1}</p>
          </div>
          <div className="wrapper white-bg">
            <div className="row">
              <p>
                {c.tx_1} <span className="light">{c.tx_2}</span>
              </p>
              <p className="bold">{nutrients[0]}</p>
            </div>
            <div className="row inline">
              <p>{c.tx_3}</p>
              <p className="bold">{nutrients[1]}</p>
            </div>
          </div>
          <div className="row white-bg">
            <p>
              {d.tx_1} <span className="light">{d.tx_2}</span>
            </p>
            <p className="bold">{nutrients[2]}</p>
          </div>
          <div className="row white-bg">
            <p>
              {e.tx_1} <span className="light">{e.tx_2}</span>
            </p>
            <p className="bold">{nutrients[3]}</p>
          </div>
          <div className="wrapper white-bg">
            <div className="row">
              <p>
                {f.tx_1} <span className="light">{f.tx_2}</span>
              </p>
              <p className="bold">{nutrients[4]}</p>
            </div>
            <div className="row inline">
              <p className="light">{f.tx_3}</p>
              <p className="bold">{nutrients[5]}</p>
            </div>
            <div className="row inline">
              <p className="light">{f.tx_4}</p>
            </div>
          </div>
          <div className="row white-bg">
            <p className="light">{g.tx_1}</p>
          </div>
        </div>
      )}
    </section>
  );
}
