import React from "react"
import styles from "./index.module.css"
import HeroImage from "./heroImage"
import HeroContent from "./heroContent"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroInnerWrapper}>
        <HeroImage />
        <hr className={styles.horizontal} />
        <HeroContent />
      </div>
      <div className={styles.background}></div>
    </div>
  )
}

export default Hero
