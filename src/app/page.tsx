// import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Solutions from "@/components/Solutions/Solutions";
import Services from "@/components/Services/Services";
import Location from "@/components/Location/Location";
import Questions from "@/components/Questions/Questions";
import Footer from "@/components/Footer/Footer";
import "../../colors/default.scss"
import Digital from "@/components/Digital/Digital";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={`cflex oci `}>
        <Header></Header>
        <Solutions></Solutions>
      </div>
      <Digital></Digital>

      <Services></Services>
      <Location></Location>
      <Testimonials></Testimonials>

      <Questions></Questions>
      <Footer></Footer>





    </div>
  );
}
