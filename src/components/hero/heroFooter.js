import React from "react"
import styles from "./heroFooter.module.css"
import { FaTwitter, FaTwitch, FaLinkedin } from "react-icons/fa"

const HeroFooter = () => {
  return (
    <div className={styles.footerWrapper}>
      <hr className={styles.horizontal} />
      <div className={styles.iconWrapper}>
        FOLLOW ME{" "}
        <a
          href="https://twitter.com/rahatcodes"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaTwitter className={styles.singleIcon} />
        </a>{" "}
        <a
          href="https://www.twitch.tv/rahatcodes"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaTwitch className={styles.singleIcon} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/rahatc/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin className={styles.singleIcon} />
        </a>{" "}
      </div>
    </div>
  )
}

export default HeroFooter
