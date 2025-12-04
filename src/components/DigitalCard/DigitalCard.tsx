import styles from "./DigitalCard.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";
import Arrow from "../Arrow/Arrow";

type Props = {
   title:string;
   desc:string;
}

export default function DigitalCard({title,desc}:Props) {

   return (
      <div className={`cflex jcb `+styles.container}>
         <div className={`cflex oci `}>
            <h2>{title}</h2>
            <p>{desc}</p>
         </div>
         <Arrow subHeader="learn more" />
      </div>
   )
}