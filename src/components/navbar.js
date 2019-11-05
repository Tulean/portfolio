import React, { Component } from "react"
import { TimelineMax, Expo } from "gsap/TweenMax"
import "./navbar.scss"

class navbar extends Component {
  componentDidMount() {
    var whiteSection = document.getElementsByClassName("Projects")
    var t1 = new TimelineMax({ paused: true })
    var t2 = new TimelineMax({ paused: true })
    t1.to(".one", 0.3, {
      y: 6,
      rotation: 45,
      ease: Expo.easeInOut,
    })
    t1.to(".two", 0.3, {
      y: -6,
      marginLeft: "0px",
      width: "40px",
      rotation: -45,
      ease: Expo.easeInOut,
      delay: -0.3,
    })
    t1.to(".menu", 1, {
      top: "0%",
      ease: Expo.easeInOut,
      delay: -0.4,
    })
    t1.staggerFrom(
      ".menu ul li",
      0.4,
      { x: window.innerWidth, opacity: 0, ease: Expo.easeOut },
      0.1
    )
    t1.reverse()
    t2.to("span", 0.6, { backgroundColor: "#111", ease: Expo.easeOut })
    document.querySelector(".hamburger").addEventListener("click", function() {
      t1.reversed(!t1.reversed())
      if (window.scrollY >= whiteSection[0].offsetTop) {
        t2.reversed(!t2.reversed())
      }
    })
    document.querySelectorAll(".navLink").forEach(a => {
      a.addEventListener("click", function() {
        t1.reversed(!t1.reversed())
      })
    })
    document.addEventListener("scroll", function() {
      if (window.scrollY >= whiteSection[0].offsetTop && t1.reversed()) {
        t2.play()
      } else {
        t2.reverse()
      }
    })
  }
  render() {
    return (
      <div>
        <div className="hamburger">
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <div className="menu">
          <div className="data">
            <ul>
              <li>Navigation</li>
              <li>
                <a className="navLink" href="#Landing">
                  Home
                </a>
              </li>
              <li>
                <a className="navLink" href="#Projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="navLink" href="#About">
                  About
                </a>
              </li>
              <li>
                <a className="navLink" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default navbar
