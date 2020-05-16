import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Header from "../components/header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <React.Fragment>
      <Header />
      <Layout location={location} title={siteTitle}>
        <SEO title="LAWISE" />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              style={{
                fontSize: `110%`,
                borderBottom: `1px solid rgb(224, 224, 224, 0.5)`,
                padding: `0 0 20px 0`,
                margin: `0 0 20px 0`,
              }}
            >
              <div>
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    to={node.fields.slug}
                    style={{
                      color: `hsla(0, 0%, 0%, 0.9)`,
                      boxShadow: `none`,
                    }}
                  >
                    {title}
                  </Link>
                </h2>
                <small
                  style={{
                    color: `rgba(123, 123, 123, 0.9)`,
                  }}
                >
                  {node.frontmatter.date} • {node.frontmatter.author}
                </small>
              </div>
              <div>
                <p>
                  <p
                    style={{ fontFamily: `sans-serif`, fontSize: `110%` }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </p>
              </div>
            </article>
          )
        })}
      </Layout>
    </React.Fragment>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
