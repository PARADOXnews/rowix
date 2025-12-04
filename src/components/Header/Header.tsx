import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import "../../../colors/default.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <div className={styles.logoBox}>
          <Image src="/Header/Logo.png" alt="Logo" width={129.71} height={24} />
        </div>

        <div className={styles.buttonContainer}>
          <ul className={`jce `+ styles.menu}>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Project</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
