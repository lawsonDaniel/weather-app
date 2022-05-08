import React from 'react'
import "./hummidity.css"

function Humidity({hummidity}) {
  return (
    <>
      <div className="progress" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
       <div className='hummidity-scale'>
         <div>0%</div>
         <div>50%</div>
         <div>100%</div>
       </div>
       <progress value={hummidity} max="100">{hummidity}</progress>
      </div>
      
    </>
  )
}

export default Humidity
