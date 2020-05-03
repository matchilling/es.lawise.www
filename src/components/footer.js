import React from "react"
import { rhythm } from "../utils/typography"

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}
        >
          <div>
            <h4>Disclaimer</h4>
            <p>
              Nothing provided in this website or transmitted by email, or
              otherwise provided, constitutes legal or patent advice. This
              website and associated materials are intended to provide only
              general information regarding patents and trademarks, and are not
              a substitute for legal, patent or trademark advice.
            </p>
          </div>
        </div>
        <hr
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}
        />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}
        >
          <section
            style={{
              display: `flex`,
              fontSize: `80%`,
              justifyContent: `space-between`,
              textTransform: `uppercase`,
            }}
          >
            <div>
              © {new Date().getFullYear()}, Lawise{` `}
            </div>
            <ul>
              <li>
                <a href={""}>Aviso legal</a>
              </li>
              <li>
                <a href={""}>Política de Privacidad</a>
              </li>
              <li>
                <a href={""}>Política de Cookies</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
