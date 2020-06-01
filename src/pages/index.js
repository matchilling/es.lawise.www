import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Header from "../components/header"

const standard = post => {
  return (
    <a
      className="article-preview standard"
      key={post.node.fields.slug}
      href={post.node.fields.slug}
      style={{ boxShadow: `none` }}
    >
      <h2
        style={{
          fontSize: `1.4427rem`,
          lineHeight: `1.1`,
          marginBottom: rhythm(1 / 4),
          marginTop: rhythm(2),
        }}
      >
        {post.node.frontmatter.title}
      </h2>
      <small style={{ color: "rgba(0, 0, 0, 0.35)" }}>
        <span style={{ textTransform: `capitalize` }}>
          {post.node.frontmatter.date}
        </span>
      </small>
      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
    </a>
  )
}

const top = (post, imgAlignLeft) => {
  const re = /\"(\/static.*?)\"/g
  const firstImageUrl = post.node.html.match(re)
  const url = firstImageUrl
    ? `https://www.lawise.es${firstImageUrl[0].replace(/['"]+/g, "")}`
    : undefined
  const tags =
    post.node.frontmatter.tags != null
      ? post.node.frontmatter.tags.split(",")
      : []
  const readTime = (words, options) => {
    const defaults = Object.assign(
        {
          wordsPerMinute: 225,
        },
        options
      ),
      minutes = words / defaults.wordsPerMinute

    return `${Math.ceil(minutes.toFixed(2))} minutos de lectura`
  }

  const img = url => (
    <div>
      <div
        style={{
          backgroundImage: `url(${url})`,
          height: `354px`,
          width: `354px`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      />
    </div>
  )

  const preview = post => (
    <div
      style={{
        display: `flex`,
        padding: `0 1rem 0 3rem`,
        border: `1px solid rgba(208, 208, 208, 0.24)`,
      }}
    >
      <div
        style={{
          margin: `auto 3rem`,
        }}
      >
        <h2
          style={{
            fontSize: `1.50rem`,
            lineHeight: `2rem`,
            marginBottom: rhythm(1 / 4),
            marginTop: `0px`,
            fontWeight: `900`,
            fontFamily: `Montserrat, sans-serif`,
          }}
        >
          {post.node.frontmatter.title}
        </h2>
        <small style={{ color: "rgba(0, 0, 0, 0.35)" }}>
          <span style={{ textTransform: `capitalize` }}>
            {post.node.frontmatter.date}
          </span>{" "}
          • {readTime(post.node.wordCount.words)}
          {tags.length > 0 ? ` • ${tags.join(", ")}` : null}
        </small>
        <p
          style={{
            fontSize: `90%`,
            padding: 0,
            margin: 0,
          }}
          dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
        />
      </div>
    </div>
  )

  return (
    <a
      className="article-preview"
      key={post.node.fields.slug}
      href={post.node.fields.slug}
      style={{
        boxShadow: `none`,
        color: `hsla(0, 0%, 0%, 0.9) !important`,
        display: `block`,
        margin: `0px -10rem 3rem`,
      }}
    >
      <div style={{ display: `flex` }}>
        {imgAlignLeft && img(url)}
        {imgAlignLeft && preview(post)}
        {!imgAlignLeft && preview(post)}
        {!imgAlignLeft && img(url)}
      </div>
    </a>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <React.Fragment>
      <Header />
      <Layout location={location} title={siteTitle}>
        <SEO title="LAWISE" />
        {posts.map((post, index) => {
          if (index < 3) {
            return (
              <div key={post.node.fields.slug}>
                <span className="hidden-xs hidden-sm visible-md visible-lg">
                  {top(post, index % 2 === 0)}
                </span>
                <span className="visible-xs visible-sm hidden-md hidden-lg">
                  {standard(post)}
                </span>
              </div>
            )
          }

          return standard(post)
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
          html
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY", locale: "es")
            title
            description
          }
          wordCount {
            words
          }
        }
      }
    }
  }
`
