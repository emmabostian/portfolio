import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/Nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header
        style={{
          backgroundColor: "#5cdb95",
          padding: "24px",
          color: "05386b",
          position: "fixed",
          width: "100vw",
        }}
      >
        <h2>My portfolio</h2>
      </header>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
