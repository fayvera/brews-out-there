import React, {useState, useCallback, useEffect, useRef} from 'react'
import './search.css'
import { connect } from 'react-redux'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import Locate from './Locate'
import Search from './search'
import './beer-marker.jpg'
// import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { getLatLng, getGeocode } from 'use-places-autocomplete'
import {updateAddress} from '../actions/fetchBreweries'



const libraries = ["places"]
const mapContainerStyle = {
    width: '94vw',
    height: '100vh',
}
const center = {
        lat: 40.730610,
        lng: -73.935242
}



function Map(props){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
        libraries
    })


    const [markers, setMarkers] = useState([])
    const [selected, setSelected] = useState(null)


    const onMapClick = useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
        ]
        )}, [])

    useEffect(() => {
        props.breweries.map((brewery) => {
           return (brewery.latitude ? null : getAddress(brewery))
        })
    })
 
    function getAddress(b){
        const address = `${b.street} ${b.city} ${b.state} ${b.postal_code}`;
        getGeocode({ address })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
            setMarkers([
                ...b,
                {
                    latitude: lat,
                    longitude: lng
                }
            ])
        })
        .then(resp => updateAddress(resp))
        .catch((e) => console.log(e))
    }

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, []);    

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(12)
    }, [])

    const image = './beer-marker.jpg'

 
    if(loadError) return 'Error loading maps';
    if(!isLoaded) return "Loading Maps";

    return(
        <div className="map-wrapper">

            <Search panTo={panTo} markers={<Marker/>}/>
            <Locate panTo={panTo}/>

            <div className="map-div">
                <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onLoad={onMapLoad}
                onClick={onMapClick}>
                    {props.breweries.map((brewery, index) => (
                    // brewery.latitude ? 
                        <Marker 

                        key={index}
                        position={{
                            lat: Math.fround(brewery.latitude), 
                            lng: Math.fround(brewery.longitude)}}
                        // icon={{
                        // //    url: image
                        //     scaledSize: new window.google.maps.Size(40, 60),
                        //     origins: new window.google.maps.Point(0, 0),
                        //     anchor: new window.google.maps.Point(15, 15)

                        // }}
                        onClick={() => {
                            setSelected(brewery)
                        }}
                        > 
                        {selected ? (
                            <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} 
                            onCloseClick={() => {
                            setSelected(null);
                        }}>
                            <div>
                                <h2>{selected.name}</h2>
                                <h5>Brewery type: {selected.brewery_type}</h5>
                                {brewery.website_url ? <h5>Website: {brewery.website_url}</h5>  : null}
                                {brewery.phone ? <h5>Phone Number: {brewery.phone}</h5>  : null}
                            </div>
                        </InfoWindow>) : null
                        })    
                        
                        </Marker>
                    // : 
                    // null
                        // getAddress(brewery)
                    ))}
                        
                </GoogleMap>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}

export default connect(mapStateToProps)(Map)