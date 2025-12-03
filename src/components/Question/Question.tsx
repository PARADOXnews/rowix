import styles from "./Question.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";

type Props ={
  title:string;
}

export default function Question({title}:Props) {
  return (
    <div className={`aic jcb ` +styles.container}>
      <h3>{title}</h3>
      <Image src="/Questions/plus.png" width={52} height={52} alt="logo" />
    </div>
  )
}
