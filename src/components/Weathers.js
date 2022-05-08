import React from 'react'
import './Mainarea.css'
import Weather from './Weather'

function Weathers({weather,unit}) {
  return (
    <div className="Weather-list">
        
    {
      weather.map((w)=>{
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(w.applicable_date);
        var dayName = days[d.getDay()];

        return(
          <Weather unit={unit} key={w.id} max={unit == true ? Math.floor(w.max_temp) : ((Math.floor(w.max_temp)) * 9/5) + 32 } min={unit == true ? Math.floor(w.max_temp) : ((Math.floor(w.max_temp)) * 9/5) + 32 } day={dayName} img={`https://www.metaweather.com//static/img/weather/${w. weather_state_abbr}.svg`} />
        )
      })
    }
       
      
      </div>
  )
}

export default Weathers
