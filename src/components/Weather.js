import React from 'react'
import './Weather.css'
import img from '../images/Clear.png'

function Weather() {
  return (
    <>
    <div className="Weather">
    <div className='Weather-day'>Weather</div>
    <div className='weather-icon-container'>
      <img className='Weather-icon' src={img} alt="" />
    </div>
    <div className='Weather-value-container'>
      <div className='Weather-value'>
      16°C
      </div>
      <div className='Weather-value'>
      11°C
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Weather