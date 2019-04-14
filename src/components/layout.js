import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {location.pathname === rootPath ? (
          <RootHeader title={title} description={description} />
        ) : (
          <NonRootHeader title={title} description={description} />
        )}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

const TitleLink = props => (
  <Link
    style={{
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
    }}
    to={`/`}
  >
    {props.title}
  </Link>
)

const RootHeader = props => {
  return (
    <header>
      <h1 style={{ marginTop: 0 }}>
        <TitleLink title={props.title} />
      </h1>

      <h2 style={{ margin: 0, marginBottom: rhythm(1.5) }}>
        {props.description}
      </h2>
    </header>
  )
}

const NonRootHeader = props => {
  return (
    <header>
      <h1 style={{ marginTop: 0, marginBottom: rhythm(0.5), ...scale(0.5) }}>
        <TitleLink title={props.title} />
      </h1>

      <h2 style={{ margin: 0, marginBottom: rhythm(0.5), ...scale(0.2) }}>
        {props.description}
      </h2>
    </header>
  )
}

export default Layout
