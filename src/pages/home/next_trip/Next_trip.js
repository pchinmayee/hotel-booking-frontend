import React from 'react'
import Next_trip_cards from './Next_trip_cards';
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import {next_trip_Data} from "./Next_trip_data"
import "./Next-trip.css";
function Next_trip() {

const slide = (shift)=>{
  var slider=document.getElementById("slider")
  slider.scrollLeft=slider.scrollLeft+shift;
}
  
  return (
    <div>
      <div className="heading">Get Inspired your next trip</div>
    <div className="main-container-next-trip">
      <AiOutlineDoubleLeft className="sign" id="left" onClick={() => slide(-500)}/>

      <div id="slider">
        {
          next_trip_Data.map((user) => (
            <Next_trip_cards img={user.img} text={user.text}/>
          ))
        }
      </div>
      <AiOutlineDoubleRight className="sign" id="right" onClick={() => slide(500)}/>
    </div>
    </div>
  )
}

export default Next_trip
