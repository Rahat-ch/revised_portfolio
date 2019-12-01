import React from "react"
import { graphql } from "gatsby"
import SingleProject from "../../components/singleproject"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      name
      description
      username
      password
      tech
      repo
      demo
      npmPackage
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const ProjectPage = ({ data }) => {
  const projectProps = data.projectsJson
  // const title = project.title;
  // const description = project.description;
  // const imageData = project.image.childImageSharp.fluid;
  // const url = project.url;
  // const repo = project.repo;
  // const tags = project.tags

  return <SingleProject projectProps={projectProps} />
}

export default ProjectPage
