import styles from "./Questions.module.scss";
import Image from "next/image";
import Title from "../Title/Title";
import Question from "../Question/Question";
import "../../../colors/default.scss";

const questions = [
  "Can you handle large-scale mobile app development projects?",
  "Can you integrate third-party APIs into our mobile app?",
  "How do you ensure cross-platform compatibility for mobile apps?",
  "What is your approach to user experience (UX) design?"
]

export default function Questions() {
  return (
    <section className={`cflex oci ` + styles.container}>
      <Title title="frequently asked questions" subHeader="view all" />
      <div className={`oci `}>

        <div className={`cflex oci ` + styles.left}>

          <div className={`cflex oci ` + styles.min}>
            <div className={`aic jcb `}>
              <h3>how log does it take to comple a web development project?</h3>
              <Image src="/Questions/min.png" width={52} height={52} alt="logo" />
            </div>
            <p>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
          </div>
          {questions.map((item, i) => (<Question key={i} title={item} />))}


        </div>
        <div className={`cflex jcb ` + styles.right}>
          <h2>ask your question</h2>
          <div className={`cflex oci `}>

            <div className="cflex rva ">
              <p>Name</p>
              <input type="Text" placeholder="enter your name" />
            </div>

            <div className="cflex rva ">
              <p>Email</p>
              <input type="email" placeholder="enter your email" />
            </div>


            <div className="cflex rva ">
              <p>your question</p>
              <textarea placeholder="enter your question here ....."></textarea>
            </div>

            <button className={styles.button}>send your message</button>

          </div>
        </div>


      </div>
    </section>

  )
}
