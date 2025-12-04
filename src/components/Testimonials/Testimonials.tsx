import styles from "./Testimonials.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";
import TestmonialCard from "../TestimonialCard/TestimonialCard";
import Title from "../Title/Title";

export default function Testimonials() {
  return (

    <section className={`cflex oci `+ styles.container}>
      <Title title="Testimonials" subHeader="ALL Testimonials" />
      <div className={`jcb ati `}>

        <TestmonialCard name="sarah thmpson" role="CEO of BlueBloom" img="1" title="NexGen turned our business around!" desc="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!" />
        <TestmonialCard name="Wade Warren" role="Art Director" img="2" title="NexGen turned our business around!" desc="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!" />
        <TestmonialCard name="Lisa Williams" role="CEO Of HealthTech" img="3" title="NexGen turned our business around!" desc="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!" />
        <TestmonialCard name="Jennifer Lee" role="COO of Foodie Haven" img="4" title="NexGen turned our business around!" desc="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!" />
      
      </div>

    </section>
  )
}
