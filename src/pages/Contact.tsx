// files
import Form from "../components/Form";
import Map from "../components/Map";
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
          <p className="text">mon to fri : 11 - 20</p>
          <p className="text">saturday : 11 - 22</p>
          <p className="text">sunday : closed</p>
        </div>
        <div className="booking">
          <Form />
        </div>
        <Map />
      </section>
    </main>
  );
}
