import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {

   return (
      <header className={styles.header}>
         header
           
           <div className="bg-dark rounded padding flex">
  ...content goes here...
</div>


<div className="w-12 h-12 bg-slightly-lighter rounded-lg overflow-hidden">
  <img src="Logo.png" />
</div>


         
      </header>
   )
}