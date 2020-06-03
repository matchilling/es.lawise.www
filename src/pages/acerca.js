import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LinkedIn, Twitter } from "../components/icon"

const link = (type, target) => {
  if (!target) {
    return undefined
  }

  const fill = "#262626"
  const height = 40
  const width = 40
  const style = {
    link: {
      boxShadow: `none`,
      display: `inline-block`,
    },
  }

  if (type === "linkedin") {
    return (
      <a href={target} style={style.link} rel={"_nofollow"}>
        <LinkedIn fill={fill} height={height} width={width} />
      </a>
    )
  }

  if (type === "twitter") {
    return (
      <a href={target} style={style.link} rel={"_nofollow"}>
        <Twitter fill={fill} height={height} width={width} />
      </a>
    )
  }

  throw new Error(`Undefined type ${type} found.`)
}

const AboutPage = ({ data, location }) => {
  const { title, social } = data.site.siteMetadata
  console.log(title, social)
  return (
    <React.Fragment>
      <Header />
      <Layout location={location} title={title}>
        <SEO title="Quiénes somos" />
        <h1 style={{ marginTop: `1.75rem` }}>Quiénes somos</h1>
        <p
          style={{
            fontSize: `110%`,
            fontWeight: `200`,
          }}
        >
          LAWISE es un espacio donde analizamos las implicaciones legales y
          efectos que conllevan los avances tecnológicos en las organizaciones y
          en nuestra vida cotidiana. Aquí encontrarás artículos y notas de
          actualidad sobre temas legales relacionados con la inteligencia
          artificial, privacidad, propiedad intelectual, e-Gaming, Blockchain,
          LegalTech y otros asuntos de interés.
        </p>
        {Object.keys(social).map(it => link(it, social[it]))}
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
        social {
          linkedin
          twitter
        }
      }
    }
  }
`
