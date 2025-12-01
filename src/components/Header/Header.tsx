import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {

   return (
      <header className={styles.header}>
         header
         {/* <Image src="/Header/1.png" width={200} height={300} alt="foto" /> */}
      </header>
   )
}