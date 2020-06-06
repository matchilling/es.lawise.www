import React from "react"

import { rhythm } from "../utils/typography"
import "./layout.css"
import Footer from "./footer"
import Disclaimer from "./disclaimer"
import CookieConsent from "./cookie-consent"

const Layout = ({ location, title, children }) => {
  const disclaimer = !["/"].includes(location.pathname) ? <Disclaimer /> : ""

  return (
    <React.Fragment>
      <CookieConsent />
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
      <Footer location={location} />
    </React.Fragment>
  )
}

export default Layout
