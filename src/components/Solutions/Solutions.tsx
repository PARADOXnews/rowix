import Image from "next/image";
import styles from "./Solutions.module.scss";
import "../../../colors/default.scss";
import Users from "../Users/Users";

export default function Solutions() {
  return (
    <section className={`cflex oci ${styles.container}`}>
      <div className={`jcb aic `}>

        <div className={`cflex jcb ${styles.left}`}>
          <div className={`cflex ormoci ${styles.text}`}>
            <div className={styles.logo}>
              <h4 className={styles.h4}>Digital Solutions </h4>
              <Image
                src="/Solutions/button.png"
                width={266}
                height={77}
                alt="logo"
              />
            </div>
            <h4 className={styles.h4}>That Drive Success</h4>
            <p>
              At NexGen, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape.
            </p>
          </div>
          <Image src="/Solutions/text.png" width={1167} height={70} alt="logo" />
        </div>

        <div className={`cflex ${styles.right}`}>
          <Image
            src="/Solutions/advance.png"
            height={465}
            width={593}
            alt="logo"
          />

          <div className={`cflex tormeti ` + styles.state}>
            <h4>Estatein Real Estate</h4>
            <p>Web Development.</p>
          </div>
        </div>
      </div>

      <Users />
    </section>
  );
}
