import React from 'react'
import './Sidebar.css'
import SidebarMain from './SidebarMain'
import SidebarSearch from './SidebarSearch'
import { useState } from 'react'

function Sidebar({weather}) {

  const [search, setsearch] = useState(false);
  const toggleSearch = ()=>{
    setsearch(!search)
  }
  return (
    <div className='Side-bar'>
      {search ?  <SidebarSearch close={toggleSearch} /> : <SidebarMain weather={weather} search={toggleSearch} />}
    </div>
  )
}

export default Sidebar