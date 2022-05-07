import React from 'react'
import './Weather.css'


function Weather({day,max,min,img}) {
 
  

  return (
    <>
    <div className="Weather">
    <div className='Weather-day'>{day}</div>
    <div className='weather-icon-container'>
      <img className='Weather-icon' src={img} alt="" />
    </div>
    <div className='Weather-value-container'>
      <div className='Weather-value'>
      {`${max}°C`}
      </div>
      <div className='Weather-value'>
      {`${min}°C`}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Weather