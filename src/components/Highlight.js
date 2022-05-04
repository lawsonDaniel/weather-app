import React, { useState } from 'react'
import './highlight.css'

function Highlight({status,statusnumber,statusspped,wind}) {
    const style = {
        "width": "328px",
        "height": "204px",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "background": "#1E213A"
    }
    
  return (
    <>
    <div style={style}>
        <div className='HighLight-header'>{status}</div>
        <div className="HighLight-main">{statusnumber}<sub className="HighLight-main-sub">{statusspped}</sub></div>
        {wind}
    </div>
    </>
  )
}

export default Highlight