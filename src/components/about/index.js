import React from "react"
import styles from "./index.module.css"
import Skills from "../skills"

const About = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.aboutHeader}>ABOUT ME</h2>
          <hr className={styles.horizontal} />
        </div>

        <div className={styles.aboutContent}>
          <p>
            I’m a Full Stack Web Developer with a background in Customer Support
            Management and Training. In September 2018 I began my journey
            through the Columbia University Coding Bootcamp. This is where I
            honed my skills as a web developer and fell in love with all aspects
            of development. Beyond my Bootcamp experience; I continued to expand
            my learning and I now work professionally as a Software Engineer.{" "}
          </p>
          <p>
            I love working with JavaScript, CSS, HTML, NodeJS, SQL, MongoDB,
            React and GraphQL. My plan is to also slowly expand into more
            backend technologies to further expand on my knowledge.{" "}
          </p>
          <p>
            In my free time I love to play video games, watch Anime, write, rap,
            record music, and stream about learning to code.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  )
}

export default About
