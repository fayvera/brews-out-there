import React from 'react'
import './search.css'
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'

const libraries = ["places"]
const mapContainerStyle = {
    width: '94vw',
    height: '100vh',
}
const center = {
    // geolocator gem
    // if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //       });
    // } else {

        lat: 40.730610,
        lng: -73.935242
    
    // }
}

export default function Map(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries
    })

    const [markers, setMarkers] = React.useState([])
 
    if(loadError) return 'Error loading maps';
    if(!isLoaded) return "Loading Maps";
    return(
        <div className="map-div">
            <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            onClick={(event) => {setMarkers(current => [
                ...current,
                {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                }
            ])}}
            >
                {markers.map((marker, index) => (
                <Marker key={index}
                position={{lat: marker.lat, lng: marker.lng}}/>))}
            </GoogleMap>
        </div>
    )
}