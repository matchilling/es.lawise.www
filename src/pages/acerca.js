import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Header />
      <Layout location={location} title={siteTitle}>
        <SEO title="Quiénes somos" />
        <h1 style={{ marginTop: `1.75rem` }}>Quiénes somos</h1>
        <p>
          LAWISE es un espacio donde analizamos las implicaciones legales y
          efectos que conllevan los avances tecnológicos en las organizaciones y
          en nuestra vida cotidiana. Aquí encontrarás artículos y notas de
          actualidad sobre temas legales relacionados con la inteligencia
          artificial, privacidad, propiedad intelectual, e-Gaming, Blockchain,
          LegalTech y otros asuntos de interés.
        </p>
        <hr style={{ margin: `3.5rem 0` }} />
        <Bio author="Estefania Asensio" />
        <Bio author="Carlota Corredoira" />
      </Layout>
    </React.Fragment>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
