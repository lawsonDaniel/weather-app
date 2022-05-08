import React from 'react'
import Highlights from './Highlights'
import './Mainarea.css'
import Weather from './Weather'
import Weathers from './Weathers'

function Mainarea({weather,fe,ce,unit}) {
 
  return (
    <div className='Main-area'>
      <div className="temperature-unit">
        <div className={`temperature-unit-value ${unit == true ? `active` : null }`} onClick={ce}>
        ℃
        </div>
        <div className={`temperature-unit-value ${unit == !true ? `active` : null }`} onClick={fe}>
        ℉
        </div>
      </div>
     <Weathers weather={weather} unit={unit}/>
     <div className='Highlit-container'>
       <div className='Highlight-header'>
        Today's Highlight
       </div>
       <div className='Highights'>
       <Highlights weather={weather} />
       </div>
       
     </div>
      </div>
  )
}

export default Mainarea