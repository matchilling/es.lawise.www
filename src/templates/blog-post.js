import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"

const readTime = (words, options) => {
  const defaults = Object.assign(
      {
        wordsPerMinute: 225,
      },
      options
    ),
    minutes = words / defaults.wordsPerMinute

  return Math.ceil(minutes.toFixed(2))
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const meta = [
    {
      name: "description",
      content: post.frontmatter.description || post.excerpt,
    },
    { name: "og:type", content: "article" },
    { name: "og:title", content: post.frontmatter.title },
    {
      name: "og:description",
      content: post.frontmatter.description || post.excerpt,
    },
    {
      name: "twitter:description",
      content: post.frontmatter.description || post.excerpt,
    },
    { name: "twitter:label_read_time", content: "Minutos de lectura" },
    {
      name: "twitter:data_read_time",
      content: readTime(post.wordCount.words),
    },
  ]

  const re = /\"(\/static.*?)\"/g
  let firstImageUrl = post.html.match(re)
  if (firstImageUrl) {
    const url = `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8000"
        : "https://www.lawise.es"
    }${firstImageUrl[0].replace(/['"]+/g, "")}`
    meta.push({ name: "og:image", content: url })
    meta.push({ name: "twitter:image", content: url })
  }

  return (
    <React.Fragment>
      <Header />
      <Layout location={location} title={siteTitle}>
        <SEO
          description={post.frontmatter.description || post.excerpt}
          meta={meta}
          title={post.frontmatter.title}
        />
        <article>
          <div>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              <span style={{ textTransform: `capitalize` }}>
                {post.frontmatter.date}
              </span>
            </p>
          </div>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio author={post.frontmatter.author} />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY", locale: "es")
        description
      }
      wordCount {
        words
      }
    }
  }
`
