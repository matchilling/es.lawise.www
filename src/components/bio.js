/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { LinkedIn, Twitter } from "./icon"

import { rhythm } from "../utils/typography"

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

const Bio = props => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      carlota: file(absolutePath: { regex: "/profile-carlota-01.jpg/" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      estefania: file(absolutePath: { regex: "/profile-estefania-03.jpg/" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          authors {
            name
            summary
            twitter
            social {
              linkedin
              twitter
            }
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { authors } = data.site.siteMetadata
  const author = authors.filter(it => it.name === props.author).pop()

  let avatar = undefined
  if (props.author === "Carlota Corredoira") {
    avatar = data.carlota
  }
  if (props.author === "Estefania Asensio") {
    avatar = data.estefania
  }

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          borderRadius: `100%`,
          marginBottom: 0,
          marginRight: rhythm(2),
          maxHeight: 95,
          minWidth: 95,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author.name}</strong> • {author.summary}
        <br />
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          {Object.keys(author.social).map(it => link(it, author.social[it]))}
        </div>
      </p>
    </div>
  )
}

export default Bio
