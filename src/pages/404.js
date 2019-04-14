import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const { title, description } = data.site.siteMetadata

    return (
      <Layout
        location={this.props.location}
        title={title}
        description={description}
      >
        <SEO title="404: Not Found" />
        <h1>Pagina non trovata</h1>
        <p>A questo indirizzo non c'è niente (a parte questa scritta)...</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
