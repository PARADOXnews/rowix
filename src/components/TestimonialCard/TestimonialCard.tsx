import styles from "./TestimonialCard.module.scss";
import Image, { StaticImageData } from "next/image";
import "../../../colors/default.scss";
import Associates from "../Associates/Associates";


type Props = {
  title: string;
  desc: string;
  name:string;
  role:string;
  img:string |StaticImageData;
}

export default function TestimonialCard({ title, desc,name,role,img }: Props) {
  return (

    <div className={`cflex jcb ` + styles.container}>
      <div className={`cflex oci ` + styles.header}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <Associates name={name} role={role} img={img} />
      {/* <Associates name="Wade Warren" role="Art Director" img="2" />
      <Associates name="Lisa Williams" role="CEO Of HealthTech" img="3" />
      <Associates name="Jennifer Lee" role="COO of Foodie Haven" img="4" /> */}
    </div>
  )
}
