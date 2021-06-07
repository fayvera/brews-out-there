import React from 'react'
import './search.css'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import Locate from './Locate'
import Search from './search'


// import "reach/comcobox/styles."
// import '../.env'
import { formatRelative } from "date-fns";

const libraries = ["places"]
const mapContainerStyle = {
    width: '94vw',
    height: '100vh',
}
const center = {
        lat: 40.730610,
        lng: -73.935242
}

export default function Map(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries
    })

    const [markers, setMarkers] = React.useState([])
    const [selected, setSelected] = React.useState(null)

    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
        ]
        )})

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map
    }, []);    

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14)
    }, [])
 
    if(loadError) return 'Error loading maps';
    if(!isLoaded) return "Loading Maps";

    return(
        <div className="map-wrapper">

            <Search panTo={panTo}/>
            <Locate panTo={panTo}/>

            <div className="map-div">
                <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onLoad={onMapLoad}
                onClick={onMapClick}
                >
                    {markers.map((marker, index) => (
                    <Marker key={index}
                    position={{lat: marker.lat, lng: marker.lng}}
                    // icon={<i className="fas fa-beer"/>}
                    onClick={() => {
                        setSelected(marker)
                    }}/>))}

                {selected ? (
                <InfoWindow position={{lat: selected.lat, lng: selected.lng}} 
                onCloseClick ={() => {
                    setSelected(null)
                }}>
                    <div>
                        <h2>Here will be the title</h2>
                        <p>Here will be the info</p>
                    </div>
                </InfoWindow>) : null }      
                </GoogleMap>
            </div>
        </div>
    )
}
