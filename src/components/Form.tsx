export default function Form() {
  // method
  function onSubmit() {}
  return (
    <form onSubmit={onSubmit}>
      <label>
        Full Name
        <input type="text" placeholder="Full Name" />
      </label>
      <label>
        Email
        <input type="email" name="" id="" placeholder="Email" />
      </label>
      <label>
        Booking Date
        <input type="date" name="" id="" />
      </label>
      <label>
        Booking Time
        <input type="time" name="" id="" />
      </label>
      <button>Submit</button>
    </form>
  );
}
