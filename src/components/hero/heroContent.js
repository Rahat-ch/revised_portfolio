import React from "react"
import styles from "./heroContent.module.css"
import HeroFooter from "./heroFooter"
import Background from "../background"

const HeroContent = () => {
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.contentLine1}>HI I'M</h2>
      <h1 className={styles.contentLine2}>RAHAT</h1>
      <p className={styles.contentLine3}>
        WEB&nbsp;DEVELOPER,&nbsp; SPEAKER,&nbsp; STREAMER,&nbsp; RAPPER,&nbsp;
        POKÉMON&nbsp;MASTER
      </p>
      <HeroFooter />
      <Background />
    </div>
  )
}

export default HeroContent
