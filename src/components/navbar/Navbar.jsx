import NavbarTopItems from "./NavbarTopItems"
import NavbarBottomItems from "./NavbarBottomItems"
import React from "react"

import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="heading">bOOking.com</div>
        <div className="items">
          <NavbarTopItems />
        </div>
      </div>
      <div className="navbar-bottom">
        <NavbarBottomItems />
      </div>
    </div>
  )
}

export default Navbar