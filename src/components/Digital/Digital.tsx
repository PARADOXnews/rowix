import styles from "./Digital.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";
import Title from "../Title/Title";
import DigitalCard from "../DigitalCard/DigitalCard";


export default function Digital() {



   return (
      <section className={`cflex oci ` + styles.container}>
         <Title title="Reasons to Choose NexGen for Your Digital Journey" />
         <div className={`jcb ati `}>
            <DigitalCard title="Expertise in Cutting-Edge Technologies" desc="NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions." />
            <DigitalCard title="Proven Track Record of Success" desc="NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs." />
            <DigitalCard title="Client-Centric Approach" desc="At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process." />
            <DigitalCard title="Dedicated Team of Professionals" desc="Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business." />




         </div>
      </section>
   )
}