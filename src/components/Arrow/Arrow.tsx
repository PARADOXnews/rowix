import styles from "./Arrow.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";

type Props = {
   subHeader: string;

}

export default function ({subHeader}:Props) {



   return (
      <div className={`ati aic ` + styles.arrow}>
         <Image src="/Title/arrow.png" width={52} height={52} alt="logo" />
         <h3 className={styles.h3}>{subHeader}</h3>
      </div>
   )
}