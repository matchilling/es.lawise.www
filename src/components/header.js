import React from "react"
import { rhythm } from "../utils/typography"
import logo from "../../content/assets/lawise-logo.svg"

const Header = () => {
  return (
    <React.Fragment>
      <header
        style={{
          backgroundColor: `#f9f9f9`,
          borderBottom: `1px solid rgb(224, 224, 224, 0.5)`,
        }}
      >
        <div
          style={{
            display: `flex`,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            justifyContent: `space-between`,
          }}
        >
          <a href="/" className="logo">
            <img src={logo} alt="LAWISE Logo" />
            <span
              style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
              }}
            >
              <span style={{ display: `none` }}>L</span>AWISE
            </span>
          </a>
          <nav>
            <a href="/acerca">Quiénes somos</a>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
