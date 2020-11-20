import React from "react"
import NavBar from "../components/navbar/"
import PageHeadline from "../components/pageHeadline"
import EventTimeline from "../components/eventTimeline"

const eventPage = ({ data }) => {
  return (
    <div>
      <NavBar />
      <PageHeadline title="Talks, Workshops, and More" />
      <EventTimeline timelineProps={data} />
    </div>
  )
}

export const query = graphql`
  query EVENTQUERY {
    allEventsJson {
      edges {
        node {
          id
          name
          date
          talk
          watch
        }
      }
    }
  }
`

export default eventPage
