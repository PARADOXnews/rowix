import styles from "./Footer.module.scss";
import Image from "next/image";
import "../../../colors/default.scss";
import SocialCard from "../SocialCard/SocialCard";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={`cflex oci ` + styles.container}>

      <div className={`cflex rva jcc ` + styles.touch}>
        <h2>Ready to Transform Your Digital Presence?</h2>
        <div className={`jcb `}>
          <p>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
          <Image src="/Footer/touch.png" width={224} height={64} alt="logo" />
        </div>
      </div>
      <Image src="/Footer/follow.png" width={1820} height={70} alt="logo" />



      <div className={`oci `}>

        <div className={`cflex oci `}>
          <div className={`oci `}>
            <SocialCard img="instagram" title="instagram" desc="Share visually appealing snippets of our latest web projects." />
            <SocialCard img="tweeter" title="tweeter" desc="Tweet about interesting coding challenges you've overcome." />
          </div>

          <div className={`oci `}>
            <SocialCard img="dribbble" title="dribbble" desc="Showcase design elements of our web projects." />
            <SocialCard img="behance" title="behance" desc="Create detailed presentations for our projects." />
          </div>
        </div>


        <div className={`cflex oci ` + styles.footer}>
          <div className={`jcb ais ati ` + styles.menu}>

            <ul className={`cflex tvrameti `}>
              <li className={styles.header}>home</li>
              <li><Link href="#">why us</Link></li>
              <li><Link href="#">about us</Link></li>
              <li><Link href="#">testimonials</Link></li>
              <li><Link href="#">FAQ's</Link></li>
            </ul>


            <ul className={`cflex tvrameti `}>
              <li className={styles.header}>services</li>
              <li><Link href="#">web development</Link></li>
              <li><Link href="#">app development</Link></li>
              <li><Link href="#">web design</Link></li>
              <li><Link href="#">digital marketing</Link></li>
            </ul>


            <ul className={`cflex tvrameti `}>
              <li className={styles.header}>projects</li>
              <li><Link href="#">klothink</Link></li>
              <li><Link href="#">zenith</Link></li>
              <li><Link href="#">novus</Link></li>
              <li><Link href="#">apex</Link></li>
            </ul>


            <ul className={`cflex tvrameti `}>
              <li className={styles.header}>blogs</li>
              <li><Link href="#">business</Link></li>
              <li>
                <Link href="#" className={`rva aic `}>
                  <p>design</p>
                  <button className={`aic ` + styles.button}>soon</button>
                </Link>
              </li>
              <li>
                <Link href="#" className={`rva aic `}>
                  <p>development</p>
                  <button className={`aic ` + styles.button}>soon</button>
                </Link></li>
            </ul></div>



          <div className={`jcb ` + styles.mid}>
            <div className={`cflex ati jcc ` + styles.letter}>
              <p>newsletter</p>
              <h2>Subscribe To our Newsletter</h2>
            </div>
            <div className={`aic jcc oci ` + styles.mail}>
              <input type="email" placeholder="Enter your email" />
              <Image src="/SocialCard/arrow.png" width={52} height={52} alt="logo" />
            </div>
          </div>


          <div className={`jcb aic ` + styles.copyright}>
            <p>© 2024 NextGen. All rights reserved.</p>
            <div className={`oci `}>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>


        </div>

      </div>

    </section>
  )
}
