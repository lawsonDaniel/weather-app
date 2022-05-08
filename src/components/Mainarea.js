import React from 'react'
import Highlights from './Highlights'
import './Mainarea.css'
import Weather from './Weather'
import Weathers from './Weathers'

function Mainarea({weather}) {
  return (
    <div className='Main-area'>
      <div className="temperature-unit">
        <div className='temperature-unit-value active'>
        ℃
        </div>
        <div className='temperature-unit-value'>
        ℉
        </div>
      </div>
     <Weathers weather={weather}/>
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