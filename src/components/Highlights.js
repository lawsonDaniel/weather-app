import React from 'react'
import Highlight from './Highlight'
import WIndSpees from './WIndSpees'

function Highlights() {
  return (
      <>
         <div style={{"display":"flex","gap":"50px","justifyContent":"center"}}>
        <Highlight wind={<WIndSpees/>} status="Wind Status" statusnumber="7" statusspped="mps"/>
        <Highlight wind={<WIndSpees/>} status="Humidity" statusnumber="84" statusspped="%"/>

    </div>
        <div style={{"display":"flex","gap":"50px","margin-top":"50px","justifyContent":"center"}}>
        <Highlight status="Visibility" statusnumber="6,4" statusspped="miles"/>
        <Highlight status="Air Pressure" statusnumber="998" statusspped="mb"/>
        </div>
    
      </>
   
  )
}

export default Highlights