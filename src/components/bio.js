/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <aside
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
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
              Mi chiamo <strong>{author}</strong>, sono un matematico, lavoro
              come sviluppatore di applicazioni web (Ruby on Rails, React) a
              Padova in <a href={`https://www.uqido.com/it/`}>Uqido</a> (di cui
              curo il <a href="https://tech.uqido.com/">blog tecnico</a>). Ho
              una moglie e una figlia, sono socio{" "}
              <a href="https://www.mensaitalia.it/cose-il-mensa/">Mensa</a>,
              ogni tanto bazzico{" "}
              <a href={`https://facebook.com/${social.facebook}`}>facebook</a> e{" "}
              <a href={`https://twitter.com/${social.twitter}`}>twitter</a>, più
              spesso <a href={`https://github.com/${social.github}`}>github</a>.
            </p>
          </aside>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          facebook
          github
        }
      }
    }
  }
`

export default Bio
