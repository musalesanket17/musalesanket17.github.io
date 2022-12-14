import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/ProfileFinal.jpeg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Sanket Musale</span>{" "}
            </h2>
            <p>
            A web developer with a vast array of knowledge in
 front end ,
responsive frameworks and best code
practices. Look forward to using my skills for gaining
more experience.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
