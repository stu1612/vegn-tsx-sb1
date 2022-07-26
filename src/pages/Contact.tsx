// npm
import Form from "../components/Form";
import Map from "../components/Map";

export default function Contact() {
  return (
    <div className="contact">
      <div className="hours">
        <h2>opening hours</h2>
        <p>mon to fri : 11 - 20</p>
        <p>saturday : 11 - 22</p>
        <p>sunday : closed</p>
      </div>
      <div className="booking">
        <h2>booking form</h2>
        <Form />
      </div>
      <Map />
    </div>
  );
}
