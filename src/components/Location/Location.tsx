import Image from "next/image";
import Title from "../Title/Title";
import styles from "./Location.module.scss";
import Arrow from "../Arrow/Arrow";

export default function () {
  return (
    <section className={`cflex oci ` + styles.container}>
      <Title title="our works" />
      <div className={`oci cflex `}>
        <div className={`cflex ormoci ` + styles.left}>
          <div className="jcb aic">
            <div className={`totxmeti aic ` + styles.service}>
              <Image src="/Location/3.png" width={66} height={66} alt="logo" />
              <h2>zenith fitness app</h2>
            </div>
            <div className="">
              <Arrow subHeader="details" />
            </div>
          </div>
          <div className={`cflex tormeti ais`}>
            <Image
              src={"/Location/text1.png"}
              width={325}
              height={47}
              alt="logo"
            />
            <Image
              src={"/Location/text2.png"}
              width={218}
              height={47}
              alt="logo"
            />
          </div>
          <p>
            An all-in-one health and wellness app that offers personalized
            fitness plans, nutrition guidance, and virtual workout classes.
          </p>
        </div>
        <Image src="/Location/1.png" width={579} height={426} alt="logo" />

        <div className={`cflex jcb ` + styles.right}>
          <div className={`cflex tormeti ` + styles.items}>
            <h3>technologies used</h3>
            <div className={`oci ` + styles.technologies}>
              <p>react native</p>
              <p>firebase</p>
              <p>redux</p>
              <p>rest api</p>
              <p style={{ display: "block" }}>mongoDB</p>
            </div>
          </div>

          <div className={`jcc aic ormoci ` + styles.members}>
            <h4>team members</h4>
            <Image
              src={"/Location/team.png"}
              width={322}
              height={50}
              alt="logo"
            />
          </div>
          <button className={styles.button}>book a call</button>
        </div>
      </div>
    </section>
  );
}
