import React from "react"
import styles from "./index.module.css"
import HeroImage from "./heroImage"
import HeroContent from "./heroContent"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <HeroImage />
      <hr className={styles.horizontal} />
      <HeroContent />
    </div>
  )
}

export default Hero
