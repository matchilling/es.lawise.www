import React from "react"

import { rhythm } from "../utils/typography"
import "./layout.css"
import Footer from "./footer"
import Disclaimer from "./disclaimer"

const Layout = ({ location, title, children }) => {
  let disclaimer = location.pathname !== "/" ? <Disclaimer /> : ""

  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      {disclaimer}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
