// files
import Form from "../components/Form";
import ContactMap from "../components/Map";
import img from "../assets/images/general/owner.jpg";

export default function Contact() {
  return (
    <main>
      <section className="sub-hero">
        <img
          src={img}
          alt="owner of resturant"
          className="tertiary-banner shadow"
        />
        <div className="hours">
          <p>mon to fri : 11 - 20</p>
          <p>saturday : 11 - 22</p>
          <p>sunday : closed</p>
        </div>
        <div className="booking">
          <Form />
        </div>
        <ContactMap />
      </section>
    </main>
  );
}
