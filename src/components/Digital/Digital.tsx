import styles from "./Digital.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";
import Title from "../Title/Title";
import DigitalCard from "../DigitalCard/DigitalCard";


export default function Digital(){



   return(
      <section className={styles.container}>
         <Title title="Reasons to Choose NexGen for Your Digital Journey" />
         <div>
            <DigitalCard />




         </div>
      </section>
   )
}