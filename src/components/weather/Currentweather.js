import React from 'react'
import './Currentweather.css'
export default function Currentweather({data}) {
  return (
    <div className="container">
        <h1 style={{fontFamily:"Sigmar",zIndex:"1"}}>{data.city}</h1>
        <h3 style={{fontFamily:"cursive",zIndex:"1"}}>{Math.round(data.main.temp)}°C</h3>
        <p style={{fontFamily:"cursive",zIndex:"1"}}>{data.weather[0].description}</p>
    </div>
  )
}

