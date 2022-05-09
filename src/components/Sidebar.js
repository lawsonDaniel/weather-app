import React from 'react'
import './Sidebar.css'
import SidebarMain from './SidebarMain'
import SidebarSearch from './SidebarSearch'
import { useState } from 'react'

function Sidebar({weather,weatherl,unit,SearchForLocation,location,onClickedSearchLocation,search,setsearch}) {

  
  const toggleSearch = ()=>{
    setsearch(!search)
  }
  return (
    <div className='Side-bar'>
      {search ?  <SidebarSearch onClickedSearchLocation={onClickedSearchLocation} location={location}  SearchForLocation={ SearchForLocation} close={toggleSearch} /> : <SidebarMain weatherl={weatherl} unit={unit} weather={weather} search={toggleSearch}  />}
    </div>
  )
}

export default Sidebar