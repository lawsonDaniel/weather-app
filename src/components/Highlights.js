import React from 'react'
import Highlight from './Highlight'
import Humidity from './Humidity'
import WIndSpees from './WIndSpees'
import { useState } from 'react';

function Highlights({weather}) {

var today = new Date()
let day;
day = today.getDate()
if(day<10){
  day = `0${day}`
}

let month;
month = today.getMonth()
if(month<10){
  month = `0${month+1}`
}
var date =  `${today.getFullYear()}-${month}-${day}`


  return (
      <>
         <div style={{"display":"flex","gap":"50px","justifyContent":"center"}}>
      {
        weather.map((w)=>{
          console.log(w.applicable_date + " " + date) 
        return (
         <>
         { w.applicable_date == date ? <Highlight status='Wind Status' statusnumber={Math.floor(w.wind_speed)} statusspped='mps' wind={<WIndSpees direction={w.wind_direction_compass} dir={w.wind_direction}/>} />  : null}
         {  w.applicable_date == date ? <Highlight  weather={weather} wind={<Humidity hummidity={Math.floor(w.humidity)} />} status="Humidity" statusnumber={Math.floor(w.humidity)} statusspped="%"/> : null}
         
         </>
        )
        })
      }
        

    </div>

        <div style={{"display":"flex","gap":"50px","marginTop":"50px","justifyContent":"center"}}>

        {
        weather.map((w)=>{
        return (
         <>
         { w.applicable_date == date ?  <Highlight  weather={weather} status="Visibility" statusnumber={Math.floor(w. visibility)} statusspped="miles"/>  : null}
         {  w.applicable_date == date ?  <Highlight  weather={weather} status="Air Pressure" statusnumber={Math.floor(w.air_pressure)} statusspped="mb"/> : null}
         
         </>
        )
        })
      }

       
       
        </div>
    
      </>
   
  )
}

export default Highlights