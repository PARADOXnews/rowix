import Image, { StaticImageData } from "next/image";
import styles from "./Title.module.scss";
import "../../../colors/default.scss";
import Arrow from "../Arrow/Arrow";

type Props = {
   title: string;
   subHeader?: string;
}

export default function ({ title, subHeader }: Props) {



   return (
      <div className={`jcb aic ` + styles.title}>
         <h1 className={styles.h1}>{title}</h1>
         {subHeader &&
            <Arrow subHeader={subHeader} />
         }
      </div>
   )
}