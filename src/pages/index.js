import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges

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
        <SEO title="LAWISE Blog" />
        <p
          style={{
            fontSize: `145%`,
            borderBottom: `1px solid #f1f1f1`,
            padding: `0 0 20px 0`,
            margin: `0 0 20px 0`,
          }}
        >
          {description}
        </p>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              style={{
                fontSize: `110%`,
                borderBottom: `1px solid #f1f1f1`,
                padding: `0 0 20px 0`,
                margin: `0 0 20px 0`,
              }}
            >
              <header>
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
              </header>
              <section>
                <p
                  style={{ fontFamily: `sans-serif` }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
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
