import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
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
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
