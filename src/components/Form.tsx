export default function Form() {
  // method
  function onSubmit() {}
  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <input type="text" name="name" required />
        <label htmlFor="name" className="label">
          <span className="span">Name</span>
        </label>
      </div>
      <div className="input-container">
        <input type="email" name="email" required />
        <label htmlFor="email" className="label">
          <span className="span">Email</span>
        </label>
      </div>
      <div className="input-container">
        <input type="date" name="date" required />
      </div>
      <div className="input-container">
        <input type="time" name="time" required />
      </div>
    </form>
  );
}
