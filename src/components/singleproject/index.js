import React from "react"
import styles from "./index.module.css"
import Navbar from "../navbar"
import Img from "gatsby-image"

const SingleProject = ({ projectProps }) => {
  const {
    name,
    description,
    username,
    password,
    tech,
    repo,
    demo,
    image,
  } = projectProps
  return (
    <>
      <Navbar />
      <div className={styles.projectOuterContainter}>
        <div className={styles.projectContentWrapper}>
          <div className={styles.headerWrapper}>
            <h1 className={styles.projectName}>{name}</h1>
            <hr className={styles.horizontalHeader} />
          </div>
          <div className={styles.blurbWrapper}>
            <p>{description}</p>
            <div className={styles.login}>
              <p>Demo Login Information</p>
              <p>Username: {username}</p>
              <p>password: {password}</p>
            </div>
            <h2 className={styles.techHeder}>Technologies Used</h2>
            <ul className={styles.allTech}>
              {tech.map(technology => (
                <li className={styles.singleTech} key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.demoWrapper}>
            <hr className={styles.projectBottomHr} />
            <a
              className={styles.projectLinks}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          </div>
          <div className={styles.repoWrapper}>
            <hr className={styles.projectBottomHr} />
            <a
              className={styles.projectLinks}
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
        <Img
          fluid={image.childImageSharp.fluid}
          className={styles.projectImage}
        />
      </div>
    </>
  )
}

export default SingleProject
