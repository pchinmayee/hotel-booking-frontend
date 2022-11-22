import React from 'react'
import "./Next-trip.css";
function Next_trip_cards(props) {

  return (
    <div className='card'>
      <div className="img_area">
        <img src={props.img} alt=""/>
        </div>
      <div className='text_area'>{props.text}</div>
    </div>
  )
}

export default Next_trip_cards
