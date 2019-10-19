import React from "react"
import "./navbar.scss"

const navbar = () => {
  return (
    <nav className="navbar">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label for="menu-btn" className="menu-icon">
        <span className="menu-icon__line"></span>
      </label>
      <ul className="navlinks">
        <li>Portfolio</li>
        <li>Resume</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default navbar
