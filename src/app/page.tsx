// import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Solutions from "@/components/Solutions/Solutions";
import Services from "@/components/Services/Services";
import Location from "@/components/Location/Location";
import Questions from "@/components/Questions/Questions";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Solutions></Solutions>
      <Services></Services> 

      <Digital></Digital>


      <Services></Services>


      <Location></Location>
      <Questions></Questions>


    



     
        
      <Footer></Footer>

    </div>
  );
}
