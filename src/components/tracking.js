import React from "react"
import ReactGA from "react-ga"

const Tracking = {
  start() {
    ReactGA.initialize("UA-168165987-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  },
}

export default Tracking
