import React from 'react'
import "./Nexttrip.css";
function Nexttripcards(props) {

  return (
    <div className='card'>
      <div className="img_area">
        <img src={props.img} alt=""/>
        </div>
      <div className='text_area'>{props.text}</div>
    </div>
  )
}

export default Nexttripcards
