import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import styles from "./index.module.css"

const navData = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Events", "/events"],
]

const navbar = () => {
  const isMenuItemPath = itemPath => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === itemPath) {
        return true
      }
    }
  }
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        R<span className={styles.logoDot}>.</span>
      </span>
      <div className={styles.navWrapper}>
        {navData.map(item => (
          <Link
            className={classNames({
              [styles.navItem]: !isMenuItemPath(item[1]),
              [styles.navItemCurrent]: isMenuItemPath(item[1]),
            })}
            to={item[1]}
          >
            {item[0]}
          </Link>
        ))}
        <a
          className={styles.navItem}
          href="https://www.twitch.tv/rahatcodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stream
        </a>
      </div>
    </nav>
  )
}

export default navbar
