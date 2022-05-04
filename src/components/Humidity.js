import React from 'react'

function Humidity() {
  return (
    <>
      <div className="progress" style={{display:'flex',justifyContent:'center'}}>
        <div className="progress-bar" role="progressbar" style={{width: '66%','height':'8px',background:'#FFEC65','border-radius': '80px'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
      
    </>
  )
}

export default Humidity
