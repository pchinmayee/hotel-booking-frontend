import "./BrowseByProperty.css"
import Card from "./Card"
import {useState} from 'react'
import BrowseByPropertyData from "./BrowseByPropertyData"
function BrowseByProperty() {
  const [images,setimages] =useState(BrowseByPropertyData)
  return (
    <div className="container1">
        <h1 id="heading">Browse by Property</h1>
        <div className="images-container">
            {images.map((item)=>(
                <Card item={item}/>
            ))}
        </div>
    </div>
  )
}

export default BrowseByProperty