import React from 'react'
import Nexttripcards from './Nexttripcards';
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import {nexttripData} from "./Nexttripdata"
import "./Nexttrip.css";
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
          nexttripData.map((user) => (
            <Nexttripcards img={user.img} text={user.text}/>
          ))
        }
      </div>
      <AiOutlineDoubleRight className="sign" id="right" onClick={() => slide(500)}/>
    </div>
    </div>
  )
}

export default Next_trip
