import styles from "./SocialCard.module.scss";
import Image, { StaticImageData } from "next/image";
import "../../../colors/default.scss";

type Props ={
  title:string;
  desc:string;
  img:string | StaticImageData;
}

export default function SocialCard({title,desc,img}:Props) {
  return (
    <div className={`cflex jcb `+ styles.container}>
      <div className={`jcb `}>
        <Image src={`/SocialCard/${img}.png`} width={66} height={66} alt="logo" />
        <Image src="/SocialCard/arrow.png" width={52} height={52} alt="logo" />
      </div>
      <div className={`cflex tormeti `}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}
