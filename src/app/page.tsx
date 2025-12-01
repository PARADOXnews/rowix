// import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Solutions from "@/components/Solutions/Solutions";
import Services from "@/components/Services/Services";

export default function Home() {


  return (
    <>
      <Header></Header>

      <Solutions></Solutions>

      <Services></Services>
    </>
  );
}
