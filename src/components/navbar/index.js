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
    if (window !== undefined) {
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
      <ul className={styles.navWrapper}>
        {navData.map(item => (
          <li key={item[0]}>
            {isMenuItemPath(item[1])}
            <Link
              className={classNames({
                [styles.navItem]: !isMenuItemPath(item[1]),
                [styles.navItemCurrent]: isMenuItemPath(item[1]),
              })}
              to={item[1]}
            >
              {item[0]}
            </Link>
          </li>
        ))}
        <li>
          <a
            className={styles.navItem}
            href="https://rahatcodes.com"
            target="_blank"
          >
            Stream
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
