import React from 'react'
import './search.css'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import Locate from './Locate'
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
        // googleMapsApiKey: (process.env.REACT_APP_GOOGLE_KEY),
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
        <div className="map-div">

            <Search panTo={panTo}/>
            <Locate panTo={panTo}/>

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
    )
}

function Search({ panTo }){
    const {ready, 
        value, 
        suggestions: {status, data}, 
        setValue, 
        clearSuggestions
        } = usePlacesAutocomplete({
        requestOptions: {
            // change to locations near user
            location: {lat: () => 40.730610, lng: () => -73.935242},
            radius: 200 * 1000.
        }
    })
    
    return (
        <div className="search-bar">
            <Combobox 
            onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions()

                try {
                    const results = await getGeocode({address});
                    const { lat, lng } = await getLatLng(results[0])
                    panTo({ lat, lng });
                } catch (error){
                    console.log("error!")
                }
                }}
            >
                <ComboboxInput 
                value={value} 
                onChange={(e) => {
                setValue(e.target.value)
            }}
            disabled={!ready}
            placeholder="Search by Location"/>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({id, description}) => (
                    <ComboboxOption 
                        key={id} 
                        value={description}/>
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    </div>
    )
}