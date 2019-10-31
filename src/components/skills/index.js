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
      <Background />
    </div>
  )
}

export default Skills
