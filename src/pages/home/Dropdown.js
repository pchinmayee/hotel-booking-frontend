import React from 'react';
import {useState} from 'react';
import './Dropdown.css'

function Dropdown() {

    const[isDropDownVisible,setIsDropDownVisible]=useState(false);

    const[itemList]=useState([
        {
            value:"limit1",
            name:"2 Adult . 1 Child . 1 Room"
        },
        {
            value:"limit2",
            name:"2 Adult . 1 Child . 2 Room"
        },
        {
            value:"limit3",
            name:"4 Adult . 2 Child . 2 Room"
        },
        {
            value:"limit4",
            name:"2 Adult . 3 Child . 2 Room"
        },
        
    ]);

    const [selectedItemIndex,setSelectedItemIndex]=useState(null);

  return (
    <div className='main-dropdown'>
        <div className='custom-dropdown'>
            <div className='custom-dropdown-selection'  onClick={e=>{
                setIsDropDownVisible(!isDropDownVisible);
            }}>
                {selectedItemIndex!==null?itemList[selectedItemIndex].name:"2 Adult . 1 Child . 1 Room"}
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