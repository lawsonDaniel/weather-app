import React from 'react'
import './Mainarea.css'
import Weather from './Weather'
import Weathers from './Weathers'

function Mainarea() {
  return (
    <div className='Main-area'>
      <div className="temperature-unit">
        <div className='temperature-unit-value'>
        ℃
        </div>
        <div className='temperature-unit-value active'>
        ℉
        </div>
      </div>
     <Weathers />
      </div>
  )
}

export default Mainarea