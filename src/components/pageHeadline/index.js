import React from "react"
import styles from "./index.module.css"

const PageHeadline = ({ title }) => {
  return (
    <div className={styles.headlineWrapper}>
      <hr className={styles.horizontal} />
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default PageHeadline
