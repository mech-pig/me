/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import "../style.scss"
import { Container, Hero } from "rbx"

import SEO from "./seo"
import Footer from "./footer"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <>
      <SEO title={title} />
      <Hero color="primary" size="fullheight">
        <Hero.Body>
          <Container>{children}</Container>
        </Hero.Body>
        <Hero.Foot>
          <Footer author={data.site.siteMetadata.author} />
        </Hero.Foot>
      </Hero>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
