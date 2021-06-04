import React from 'react'
import './search.css'
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'

const libraries = ["places"]
const mapContainerStyle = {
    width: '94vw',
    height: '100vh',
}
const center ={
    // geolocator gem
    lat: 40.730610,
    lng: -73.935242
}

export default function Map(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries
    })

    if(loadError) return 'Error loading maps';
    if(!isLoaded) return "Loading Maps";
    return(
        <div className="map-div">
            <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            ></GoogleMap>
        </div>
    )
}