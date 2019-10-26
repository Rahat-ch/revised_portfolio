import React from "react"
import styles from "./heroimage.module.css"
import me from "../../images/mee.png"

const HeroImage = () => {
  return <img src={me} alt="rahat headshot" className={styles.me} />
}

export default HeroImage

// src / images / mee.png
