import React from 'react'
import './Sidebarsearch.css'
import cancel from '../images/cancle.png'
import search from '../images/search.png'

function SidebarSearch({close}) {
  return (
      <>
      <div className='cancle-search'>
      <span className="material-icons-sharp" onClick={close}>
        <img style={{color:'white'}} src={cancel} alt="" />
        </span>

      </div>
         <div className='Search-container'>
        <div className="search-bar">
        <form >
        <div className='search-area'>
        <span className="material-icons-sharp">
        <img style={{color:'white'}} src={search} alt="" />
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