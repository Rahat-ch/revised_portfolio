import React from "react"
import styles from "./index.module.css"
import skillIcons from "./skillIcons"
import Background from "../background-lower"

const Skills = () => {
  return (
    <div className={styles.circlContainer}>
      {skillIcons.map(icon => (
        <img
          src={icon.image}
          alt={icon.name}
          key={icon.name}
          className={styles[icon.name]}
        />
      ))}
      <div className={styles.iconCredit}>
        Icons by{" "}
        <a
          className={styles.creditLink}
          href="https://icons8.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons8
        </a>
      </div>
      <Background />
    </div>
  )
}

export default Skills
