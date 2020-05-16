/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = props => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      carlota: file(absolutePath: { regex: "/profile-carlota.jpg/" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      estefania: file(absolutePath: { regex: "/profile-estefania-01.jpg/" }) {
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
        {` `}
      </p>
    </div>
  )
}

export default Bio
