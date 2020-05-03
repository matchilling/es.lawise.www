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
              Toda la información contenida en este sitio web o la transmitida
              por cualquier otro medio es de carácter general. No constituye
              asesoramiento jurídico, ni puede sustituirlo.
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
              fontSize: `75%`,
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
                <a href={""}>Privacidad</a>
              </li>
              <li>
                <a href={""}>Cookies</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
