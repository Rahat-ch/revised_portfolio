import React from "react"
import NavBar from "../components/navbar/"
import { graphql } from "gatsby"
import ProjectListing from "../components/projectListing"
import PageHeadline from "../components/pageHeadline"

const projectPage = ({ data }) => {
  return (
    <div>
      <NavBar />
      <PageHeadline title="My Projects" />
      <ProjectListing data={data} />
    </div>
  )
}

export const query = graphql`
  query PROJECTLISTQUERY {
    allProjectsJson {
      edges {
        node {
          id
          name
          description
          username
          password
          align
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default projectPage
