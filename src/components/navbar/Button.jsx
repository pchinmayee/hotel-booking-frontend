import React from "react"
function Button({text,icon,reverse,color}) {
  return (
    <button type="button" className={`button ${reverse && 'reverse'}`} style={{backgroundColor:color}}>
    {text}</button>
  )
}

export default Button