import React from "react"
import { Link } from "gatsby"
import "./nav.css"

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/work">Work</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
