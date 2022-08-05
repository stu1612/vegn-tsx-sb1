// files
import data from "../data/form.json";

export default function Form() {
  // components
  const Inputs = data.map((input) => (
    <div className="input-container" key={input.id}>
      <input
        type={input.text}
        name={input.text}
        required={input.required}
        autoFocus={input.autofocus}
      />
      {input.label && (
        <label htmlFor={input.text} className="label">
          <span className="span">{input.text}</span>
        </label>
      )}
    </div>
  ));
  return <form>{Inputs}</form>;
}
