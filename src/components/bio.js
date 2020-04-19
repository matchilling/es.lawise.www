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
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      estefania: file(absolutePath: { regex: "/profile-estefania.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
  console.log(data)
  const { authors } = data.site.siteMetadata
  const author = authors.filter(it => it.name === props.author).pop()

  let avatar = undefined
  if (props.author === "Carlota") {
    avatar = data.carlota
  }
  if (props.author === "Estefania") {
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
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Escrito por <strong>{author.name}</strong> • {author.summary}
        {` `}
      </p>
    </div>
  )
}

export default Bio
