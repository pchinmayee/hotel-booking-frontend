import React from 'react';
import {useState} from 'react';
import './Dropdown.css'

function Dropdown() {

    const[isDropDownVisible,setIsDropDownVisible]=useState(false);

    const[itemList]=useState([
        {
            value:"limit1",
            name:"Single   . 1 Bed . 1 Person"
        },
        {
            value:"limit2",
            name:"Double   . 1/2 Bed . 2 Person"
        },
        {
            value:"limit3",
            name:"Triple   . 3 Bed . 3 Person"
        },
        {
            value:"limit4",
            name:"Queen    . 1 Bed . 1/2 Person"
        },
        {
            value:"limit5",
            name:"King     . 1 Bed . 1/2 Person"
        },
        {
            value:"limit6",
            name:"Twin     . 2 Bed . 2 Person"
        },
        {
            value:"limit7",
            name:"Suite/Executive Suite"
        },
        {
            value:"limit8",
            name:"Appartment"
        },
        {
            value:"limit9",
            name:"Villa"
        },
        
    ]);

    const [selectedItemIndex,setSelectedItemIndex]=useState(null);

  return (
    <div className='main-dropdown'>
        <div className='custom-dropdown'>
            <div className='custom-dropdown-selection'  onClick={e=>{
                setIsDropDownVisible(!isDropDownVisible);
            }}>
                {selectedItemIndex!==null?itemList[selectedItemIndex].name:"Room Type"}
            </div>
            {
                isDropDownVisible?(
                    <div className='items-holder'>
                {
                    itemList.map((item,index)=>(
                        <div key={item.value} className='dropdown-item' onClick={e=>{
                            setSelectedItemIndex(index);
                            setIsDropDownVisible(false);
                        }}>
                            {item.name}
                        </div>
                    ))
                }
            </div>
                ):<></>
            }
        </div>
    </div>
  )
}

export default Dropdown