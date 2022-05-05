import React from 'react'
import './Sidebarsearch.css'

function SidebarSearch({close}) {
  return (
      <>
      <div className='cancle-search'>
      <span className="material-icons-sharp" onClick={close}>
        close
        </span>

      </div>
         <div className='Search-container'>
        <div className="search-bar">
        <form >
        <div className='search-area'>
        <span className="material-icons-sharp">
            search
            </span>
            <input className='search-bar' type="search" placeholder='search location' />
        </div>
        <input className='btn' type="submit"  value="search" />
        </form>
        </div>
    </div>
      </>
   
  )
}

export default SidebarSearch