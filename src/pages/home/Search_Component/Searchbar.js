import React from 'react';
import './Searchbar.css';
import DateRangePickerComp from './DateRangePickerComp';
import Button from '../../../components/navbar/Button';
import Dropdown from './Dropdown';



function Searchbar() {
  return (
    <div className='main_search'>
        <input className="search-location" type="text" placeholder='Where are you going'/> 
        <DateRangePickerComp className='search-date-range'/>
        <Dropdown/>
        <Button className="search-button" text={"Search"} reverse={false} color={"#B3CDE0"}/>
        
        
        
    </div>
  );
}

export default Searchbar