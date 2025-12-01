"use client";

import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <div className={styles.logoBox}>
          <Image
            src="/Header/Logo.png"  // make sure Logo.png is in /public
            alt="Logo"
            width={48}
            height={48}
          />
        </div>
      </div>
    </header>
  );
}
