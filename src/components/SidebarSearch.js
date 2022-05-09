import React from 'react'
import './Sidebarsearch.css'
import cancel from '../images/cancle.png'
import search from '../images/search.png'
import {useState} from 'react'

function SidebarSearch({close,search, SearchForLocation,location,onClickedSearchLocation}) {


  const [searchLocation,setsearchLocation] = useState('')
  const [clickedLocation,setclickedLocation] = useState('')
  


  const onSearch = (e)=>{
    e.preventDefault()
    SearchForLocation(searchLocation)
    
  }
  onClickedSearchLocation(clickedLocation)
   
  return (
      <>
      <div className='cancle-search'>
      <span className="material-icons-sharp" onClick={close}>
        <img style={{color:'white'}} src={cancel} alt="" />
        </span>

      </div>
         <div className='Search-container'>
        <div className="search-bar"> 
        <form onSubmit={onSearch}>
        <div className='search-area'>
        <span className="material-icons-sharp">
        <img style={{color:'white'}} src={search} alt="" />
            </span>
            <input className='search-bar' type="search" value={searchLocation}  onChange={(e)=>{setsearchLocation(e.target.value)}} placeholder='search location' />
        </div>
        <input className='btn' type="submit" value="search"/>
        </form>
        </div>     
    </div>
    <div style={{
                color:'#fff', 
                fontFamily:'Raleway',
                padding: '23px 49px'
                
                }}>
                    <select onChange={(e)=>{
                    return  setclickedLocation(e.target.value)
                    }}  style={{
                     border: '1px solid #FFF',
                     background: '#1E213A',
                     color: '#fff',
                     padding: '11px',
                     width: '265px',
                     fontSize: '18px',

                    }}>
                       {location.map((loc)=>{
                        return <option value={loc.woeid} key={loc.woeid} >{loc.title }</option>
                      })}
                    
                    </select>

        </div>
      </>
   
  )
}

export default SidebarSearch