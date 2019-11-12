import React from "react"
import styles from "./index.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"
import classNames from "classnames"
import BackgroundRight from "../background-project-right"
import BackgroundLeft from "../background-project-left"

const ProjectListing = ({ data }) => {
  const projectIndex = data.allProjectsJson.edges
  return (
    <div className={styles.outerContainer}>
      {projectIndex.map(({ node: item }) => {
        const title = item.name
        const description = item.description
        const username = item.username
        const password = item.password
        const align = item.align
        const slug = item.slug
        const imageData = item.image.childImageSharp.fluid
        const hide = () => {
          if (username.length > 0) {
            return true
          }
        }

        return (
          <div key={title} className={styles[`projectWrapper${align}`]}>
            <div className={styles.contentWrapper}>
              <div className={styles.titleWrapper}>
                <Link to={slug} className={styles.title}>
                  {title}
                </Link>
                <hr className={styles.horizontal} />
              </div>
              <p className={styles.description}>{description}</p>
              <div
                className={classNames({
                  [styles.hide]: !hide(),
                  [styles.content]: hide(),
                })}
              >
                <p>Demo Login Information</p>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
              </div>
              <div className={styles.projectFooter}>
                <hr className={styles.horizontalFooter} />{" "}
                <Link to={slug} className={styles.projectLink}>
                  View Project
                </Link>
              </div>
            </div>
            <Link className={styles[`imgLink${align}`]} to={slug}>
              <Img
                fluid={imageData}
                alt={title}
                className={styles[`image${align}`]}
              />
            </Link>
            {align == "right" ? <BackgroundRight /> : <BackgroundLeft />}
          </div>
        )
      })}
    </div>
  )
}

export default ProjectListing
