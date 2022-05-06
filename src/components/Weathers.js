import React from 'react'
import './Mainarea.css'
import Weather from './Weather'

function Weathers({weather}) {
  return (
    <div className="Weather-list">
        <Weather weather={weather}/>
        <Weather weather={weather}/>
        <Weather weather={weather}/>
        <Weather weather={weather}/>
        <Weather weather={weather}/>
      </div>
  )
}

export default Weathers
