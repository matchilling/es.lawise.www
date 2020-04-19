import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <React.Fragment>
      <div
        style={{
          borderWidth: `16px 0 0`,
          borderTopStyle: `solid`,
          borderImage: `linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3`,
        }}
      />
      <Layout location={location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness 😲.</p>
      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
