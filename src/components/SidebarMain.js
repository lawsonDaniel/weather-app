import React from 'react'
import Image from '../images/Shower.png'

function SidebarMain({search,weather,weatherl,unit}) {

var today = new Date()
var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();

  return (
   <>
    <div className='Search'>
        <div> 
            <button onClick={search} className='Search-btn'>Search for Places</button>
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
              {
        weather.map((w)=>{
        return (
         <>
         { w.applicable_date == date ?  <img src={`https://www.metaweather.com//static/img/weather/${w. weather_state_abbr}.svg`} alt="" />  : null} 
         </>
        )
        })
      }
          </div>
             </div>
        </div>
        {/* would add the temperature api here */}
        <div className='Weather-temperature-container'>
             {
                weather.map((w)=>{
                return (
                <>
                { w.applicable_date == date ?  <span className='Weather-temperature'>{unit == true ? Math.floor(w.the_temp) : ((Math.floor(w.the_temp)) * 9/5) + 32 }<span className='Weather-temperature-unit'>  {unit == true ? `°C` : `°F` }</span>   </span>   : null} 
                </>
                )
                })
      }
        </div>
            {/* would add the weather status here */}
        <div className='Weather-status-container'>
       
         {
                weather.map((w)=>{
                return (
                <>
                { w.applicable_date == date ?   <span className='Weather-status'>{w.weather_state_name}</span> : null} 
                </>
                )
                })
      }

        </div>
        <div className="Weather-date">
            {/* would put the api day here */}
            <div className='Day'>
                Today
            </div>
            
            {
      weather.map((w)=>{
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(w.applicable_date);
        var dayName = days[d.getDay()];

        return(
            <>
             {w.applicable_date == date ? <div className='Day'>
           {dayName}
            </div>  : null}
            </>
        
        )
      })
    }
        </div>
        <div className="Weather-location-container">
            <div className='Weather-location-icon'>
            <span className="material-icons">
                place
            </span>

            </div>
            
            <div className='Weather-location-text'>
             {weatherl}
            </div> 
        </div>
   </>
  )
}

export default SidebarMain