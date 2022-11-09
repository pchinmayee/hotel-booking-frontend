import Button from "./Button"
import React from "react"
function NavbarTopItems() {
  return (
    <div className="navbar-items">
        <div className="icon"></div>
        <Button text={"Add Property"} reverse={true} color={"transparent"} />
        <Button text={"Register"} reverse={false} color={"#005B96"} />
        <Button text={"Sign In"} reverse={false} color={"#005B96"} />
    </div>
  )
}

export default NavbarTopItems