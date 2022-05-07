import React from 'react'
import './Mainarea.css'
import Weather from './Weather'

function Weathers({weather}) {
  return (
    <div className="Weather-list">
        
    {
      weather.map((w)=>{
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(w.applicable_date);
        var dayName = days[d.getDay()];

        return(
          <Weather max={Math.floor(w.max_temp)} min={Math.floor(w.min_temp)} day={dayName} img={`https://www.metaweather.com//static/img/weather/${w. weather_state_abbr}.svg`} />
        )
      })
    }
       
      
      </div>
  )
}

export default Weathers
