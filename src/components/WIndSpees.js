import React from 'react'
import './windspeed.css'

function WIndSpees({direction,dir}) {
  return (
    <>
      <div className='HighLight-wind'>
            <div>
                <span className="material-icons" style={{ transform: `rotate(${dir}deg)`}}>
                assistant_navigation
                </span>
            </div>
            <div>
               {direction}
            </div>
        </div>
    </>
  )
}

export default WIndSpees
