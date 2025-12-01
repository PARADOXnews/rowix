import Image from "next/image";
import styles from "./Solutions.module.scss";

export default function Solutions() {



   return (

      <section className={styles.container}>

         <div className={styles.left}>
            {/* <div></div> */}
            <div className={styles.logo}>
               <h4 className={styles.h4}>Digital Solutions </h4>
               <Image src="/Solutions/button.png" width={266} height={77} alt="logo" />
            </div>
            <h4 className={styles.h4}>That Drive Success</h4>
         </div>
      </section>
   )
}