import styles from "./Associates.module.scss";
import Image, { StaticImageData } from "next/image";
import "../../../colors/default.scss";

type Props = {
  name: string;
  role: string;
  img: string | StaticImageData
}

export default function Associates({ name, role, img }: Props) {
  return (
    <div className={`jcb aic `+ styles.container}>
      <div className={`txutmeti `}>
        <Image src={`/Associates/${img}.png`} width={60} height={60} alt="logo" />
        <div>
          <h2>{name}</h2>
          <p>{role}</p>
        </div>
      </div>
      <Image src={`/Associates/arrow.png`} width={52} height={52} alt="logo" />
    </div>
  )
}
