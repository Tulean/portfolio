import React, { Component } from "react"
import "./navbar.scss"

class navbar extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.heightListener)
  }
  heightListener = () => {
    var nav = document.getElementsByClassName("navbar")
    var hamburger = document.getElementsByClassName("menu-icon__line")
    var about = document.getElementsByClassName("About")
    var projects = document.getElementsByClassName("Projects")
    if (window.innerWidth > 768) {
      if (window.scrollY < about[0].offsetTop) {
        Object.assign(nav[0].style, styles.landingNav)
      } else if (
        window.scrollY >= about[0].offsetTop &&
        window.scrollY < projects[0].offsetTop
      ) {
        Object.assign(nav[0].style, styles.section1Nav)
      } else if (window.scrollY >= projects[0].offsetTop) {
        Object.assign(nav[0].style, styles.section2Nav)
      }
    } else if (window.innerWidth <= 768) {
      if (window.scrollY >= projects[0].offsetTop) {
        hamburger[0].classList.add("hamburgerDark")
      } else hamburger[0].classList.remove("hamburgerDark")
    }
  }
  render() {
    return (
      <nav className="navbar">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
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
}
const styles = {
  landingNav: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    top: "70%",
    color: "white",
    backgroundColor: "transparent",
    zIndex: "3",
  },
  section1Nav: {
    position: "fixed",
    top: "0",
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "black",
    zIndex: "3",
  },
  section2Nav: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "white",
    zIndex: "3",
  },
}

export default navbar
