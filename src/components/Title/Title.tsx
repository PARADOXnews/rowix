import Image, { StaticImageData } from "next/image";
import styles from "./Title.module.scss";
import "../../../colors/default.scss";

type Props = {
   title: string;
   subHeader?:string;
}

export default function ({ title, subHeader}: Props) {



   return (
   <div className={`jcb aic` + styles.title}>
      <h1 className={styles.h1}>{title}</h1>
      {subHeader &&
         <div className={`ati`}>
            <Image src="/Title/arrow.png" width={52} height={52} alt="logo" />
            <h3 className={styles.h3}>{subHeader}</h3>
         </div>
      }
   </div>
   )
}