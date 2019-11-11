import React from "react"
import sytles from "./index.module.css"
import Background from "../background-timeline"

const EventTimeline = ({ timelineProps }) => {
  const eventIndex = timelineProps.allEventsJson.edges
  return (
    <div className={sytles.timelineContainer}>
      {eventIndex.map(({ node: event }) => {
        const { name, date, talk } = event
        return (
          <div className={sytles.timelineItem}>
            <div className={sytles.nameWrapper}>
              <hr className={sytles.hr} />
              <h3 className={sytles.eventName}>{name}</h3>
              <Background />
            </div>
            <div className={sytles.contentWrapper}>
              <p className={sytles.date}>{date}</p>
              <p className={sytles.talkTitle}>{talk}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventTimeline
