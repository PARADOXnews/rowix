import styles from "./Services.module.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
import Title from "../Title/Title";
import "../../../colors/default.scss";

export default function Services() {
  return (
    <section className={`cflex oci ${styles.container}`}>
      <Title title="our services" />
      <div className="cflex oci">
        <div className="oci">
          <ServiceCard
            price="starts from $1,500"
            desc="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."
            service="web design"
            img="/ServiceCard/design.png"
          />
          <ServiceCard
            price="starts from $2,500"
            desc="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."
            service="mobile app development"
            img="/ServiceCard/mobile.png"
          />
        </div>
        <div className="oci">
          <ServiceCard
            price="starts from $1,800"
            desc="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."
            service="web development"
            img="/ServiceCard/web.png"
          />
          <ServiceCard
            price="starts from $1,200"
            desc="Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting."
            service="digital marketing"
            img="/ServiceCard/digital.png"
          />
        </div>
      </div>
    </section>
  );
}
