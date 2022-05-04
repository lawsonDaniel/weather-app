import React from 'react'
import Image from '../images/Shower.png'

function SidebarMain() {
  return (
   <>
    <div className='Search'>
        <div> 
            <button className='Search-btn'>Search for Places</button>
        </div>
        <div className="Gps">
            <span className="material-icons" style={{"color":"#fff"}}>
              gps_fixed
            </span>

          </div>
      </div>
      {/* weather images */}
        <div className='Weather-container'>
        <div className="weather-icon">
            
          <div className='Weather-container-image'>
              {/* Wold add the image from the api here */}
             <img className='' src={Image} alt="" />
          </div>
             </div>
        </div>
        {/* would add the temperature api here */}
        <div className='Weather-temperature-container'>
            <span className='Weather-temperature'> 15<span className='Weather-temperature-unit'>℃</span> </span>
        </div>
            {/* would add the weather status here */}
        <div className='Weather-status-container'>
         <span className='Weather-status'>Shower</span>
        </div>
        <div className="Weather-date">
            {/* would put the api day here */}
            <div className='Day'>
                Today
            </div>
            <div className='Day'>
            Fri, 5 Jun
            </div>
        </div>
        <div className="Weather-location-container">
            <div className='Weather-location-icon'>
            <span className="material-icons">
                place
            </span>

            </div>
            <div className='Weather-location-text'>
             Helsinki
            </div>
        </div>
   </>
  )
}

export default SidebarMain