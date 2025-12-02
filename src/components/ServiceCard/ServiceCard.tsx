import Image from "next/image";
import styles from "./ServiceCard.module.scss";
import "../../../colors/default.scss";

type Props = {
  img: string;
  service: string;
  desc: string;
  price: string;
};

export default function ServiceCard({ service, desc, price, img }: Props) {
  return (
    <div className={`cflex ormocdati ` + styles.card}>
      <div className="jcb">
        <div className={`totxmeti aic ` + styles.service}>
          <Image src={img} width={66} height={66} alt="logo" />
          <h2>{service}</h2>
        </div>
        <div className="">
          <Image
            src={"/ServiceCard/arrow.png"}
            width={195}
            height={52}
            alt="logo"
          />
        </div>
      </div>
      <p>{desc}</p>
      <h3>{price}</h3>
    </div>
  );
}
