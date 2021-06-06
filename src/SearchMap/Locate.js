import React from 'react'
// import Map from './GoogleMap'

export default function Locate({panTo}){
    return(
        <button className="locate" onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position)
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                }, 
                (() => {alert("Sorry! Something went wrong!")}))
        }}>
            Get My Location
        </button>
    )

} 