import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  const posts = data.allMarkdownRemark.edges
    .concat(data.allMarkdownRemark.edges)
    .concat(data.allMarkdownRemark.edges)

  return (
    <React.Fragment>
      <div
        style={{
          borderWidth: `16px 0 0`,
          borderTopStyle: `solid`,
          borderImage: `linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3`
        }}
      />
      <header style={{
        backgroundColor: `#f9f9f9`,
        borderBottom: `1px solid #e0e0e0`
      }}>
        <div style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`
        }}
        >
          <span style={{
            fontFamily: `Montserrat,sans-serif`,
            fontSize: `300%`,
            fontWeight: `900`,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}>LAWISE</span>
          <p
            style={{
              fontSize: `145%`,
              padding: `0 0 20px 0`,
              margin: `0 0 20px 0`
            }}
          >
            {description}
          </p>
        </div>
      </header>

      <Layout location={location} title={siteTitle}>
        <SEO title="LAWISE Blog"/>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              style={{
                fontSize: `110%`,
                borderBottom: `1px solid #f1f1f1`,
                padding: `0 0 20px 0`,
                margin: `0 0 20px 0`
              }}
            >
              <header>
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  <Link
                    to={node.fields.slug}
                    style={{
                      color: `hsla(0, 0%, 0%, 0.9)`,
                      boxShadow: `none`
                    }}
                  >
                    {title}
                  </Link>
                </h2>
                <small
                  style={{
                    color: `rgba(123, 123, 123, 0.9)`
                  }}
                >
                  {node.frontmatter.date} • {node.frontmatter.author}
                </small>
              </header>
              <div>
                <p>
                  <p
                    style={{ fontFamily: `sans-serif`, fontSize: `110%` }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
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
