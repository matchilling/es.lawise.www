import React from "react"
import { rhythm } from "../utils/typography"

const Footer = ({ location }) => {
  const about = !["/acerca/"].includes(location.pathname) ? (
    <div>
      <h4>LAWISE</h4>
      <p>
        LAWISE es un espacio donde analizamos las implicaciones legales y
        efectos que conllevan los avances tecnológicos en las organizaciones y
        en nuestra vida cotidiana. Aquí encontrarás artículos y notas de
        actualidad sobre temas legales relacionados con la inteligencia
        artificial, privacidad, propiedad intelectual, e-Gaming, Blockchain,
        LegalTech y otros asuntos de interés.
      </p>
      <hr
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
        }}
      />
    </div>
  ) : (
    ""
  )

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
          {about}
        </div>
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
              © {new Date().getFullYear()}, <a href="/">Lawise</a>
              {` `}
            </div>
            <ul>
              <li>
                <a href={""}>Aviso legal</a>
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
