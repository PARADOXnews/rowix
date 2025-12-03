import styles from "./DigitalCard.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";
import Arrow from "../Arrow/Arrow";


export default function DigitalCard() {



   return (
      <div className={styles.container}>
         <div>
            <h2></h2>
            <p></p>
         </div>
         <Arrow subHeader="learn more" />
      </div>
   )
}