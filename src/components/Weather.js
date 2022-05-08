import React from 'react'
import './Weather.css'


function Weather({day,max,min,img,unit}) {
 
  

  return (
    <>
    <div className="Weather">
    <div className='Weather-day'>{day}</div>
    <div className='weather-icon-container'>
      <img className='Weather-icon' src={img} alt="" />
    </div>
    <div className='Weather-value-container'>
      <div className='Weather-value'>
       {unit == true ? `${max}°C` : `${max}°F` }
      </div>
      <div className='Weather-value'>
      {unit == true ? `${min}°C` : `${min}°F` }
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Weather