/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Nav from "../components/navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
        <main>{children}</main>
        <footer>©{new Date().getFullYear()} Tuan Anh Le</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
