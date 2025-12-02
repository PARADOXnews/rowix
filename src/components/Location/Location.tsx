import Image from "next/image";
import Title from "../Title/Title";
import styles from "./Location.module.scss";
import Arrow from "../Arrow/Arrow";


export default function () {



   return (
      <section className={`cflex oci ` + styles.container}>
         <Title title="our works" />
         <div className={`oci `}>
            <div className={styles.left}>

               <div className="jcb">
                  <div className={`totxmeti aic ` + styles.service}>
                     <Image src="/Location/3.png" width={66} height={66} alt="logo" />
                     <h2>zenith fitness app</h2>
                  </div>
                  <div className="">
                     <Arrow subHeader="details" />

                  </div>
               </div>
               <Image src={"/Location/text1.png"} width={195} height={52} alt="logo" />
               <Image src={"/Location/text2.png"} width={195} height={52} alt="logo" />
               <p></p>
            </div>



            <Image src="/Location/1.png" width={579} height={426} alt="logo" />
            <div></div>
         </div>
      </section>
   )
}