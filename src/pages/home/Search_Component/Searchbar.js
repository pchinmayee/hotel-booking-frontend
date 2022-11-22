import React from 'react';
import './Searchbar.css';
import DateRangePickerComp from './DateRangePickerComp';
import Button from '../../../components/navbar/Button';
import Dropdown from './Dropdown';
import {CiLocationOn,CiCalendarDate} from 'react-icons/ci'
import {BiHotel} from 'react-icons/bi'


function Searchbar() {
  return (
    <div className='main_search'>
        <div className='total_search-location'>
          <CiLocationOn className='location-icon'/>
          <input className="search-location" type="text" placeholder='Where are you going'/> 
        </div>
        <div className='total_search-date-range'>
          <CiCalendarDate  className='date_icon'/>
          <DateRangePickerComp className='search-date-range'/>
        </div>
        <div className='total_dropdown'>
          <BiHotel className='hotel_icon'/>
          <Dropdown/>
        </div>
        
        <Button className="search-button" text={"Search"} reverse={false} color={"#B3CDE0"}/>
      
        
        
        
    </div>
  );
}

export default Searchbar