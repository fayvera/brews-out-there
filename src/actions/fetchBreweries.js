import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
// import GoogleMap from "../SearchMap/GoogleMap"
// import Geocode from "react-geocode";

// export const fetchByCity = input => {
//     return async function(dispatch) {
//         const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`)
//         const breweries = await response.json()
//         // breweries.map(b => {
//         //     const address = `${b.street} ${b.city} ${b.state} ${b.postal_code}`
//         //     const results = await getGeocode({address});
//         //     const { lat, lng } = await getLatLng(results[0])
//             // const geo = Geocode.fromAddress(address)
//             // geo.then(response => {
//             //     debugger
//             //     const { lat, lng } = response.results[0].geometry.location;
//             //     b.latitude = lat;
//             //     b.longitutde = lng;
                
//             //     console.log(lat,lng)
//             //     console.log(b)
//                 dispatch({ type: "FETCH_BREWERIES", payload: breweries})
//             // })
//             // const { lat, lng } = response.geo[0].geometry.location;
//             // console.log(lat,lng)

//             // .then((response) => {
//             //     debugger
//             //         console.log(lat, lng)
//             //     },(error) => {console.log(error)}
//             // console.log(b)
//             // )
//         // })



//         }


       
//         // const res = newResponse.map(brewery => {
//         //    const b = getGeocode({brewery})
//         //    debugger 
//         //    const { lat, lng } = getLatLng(b[0])
//         //    return{
//         //     lat: b.latLng.lat(),
//         //     lng: b.latLng.lng()
//         // }
//         // })
//         // const results = await getGeocode({newResponse})
//         // console.log(res)
//         // const { lat, lng } = await getLatLng(results[0])
       
//         // console.log({lat})
        
//         // const data = results.map(b => {
//         //     return{
//         //         ...b,
//         //         lat: b.latLng.lat(),
//         //         lng: b.latLng.lng()
//         //     }
//         // })
//         // dispatch({type: "FETCH_BREWERIES", payload: res})
//         //  .then(data => dispatch({ type: "FETCH_BREWERIES", payload: data}))

//         // .catch(err => alert(err))
    

// }

export const fetchByCity = input => {
    return function(dispatch) {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`)
        .then(r => r.json())
        .then(data => dispatch({ type: "FETCH_BREWERIES", payload: data }))
        .catch(err => alert(err))
    }
}

export const updateAddress = input => {
    debugger
    return {type: "UPDATE_BREWERY", payload: input}
}


export const fetchByType = input => {
    return function(dispatch) {
        fetch(`https://api.openbrewerydb.org/breweries?by_type=${input}`)
        .then(r => r.json())
        .then(data => dispatch({ type: "FETCH_BREWERIES", payload: data}))
        .catch(err => alert(err))
    }
}

export const fetchBreweriesType = (data) => {
    return function(dispatch) {
        fetch('https://api.openbrewerydb.org/breweries')
        .then(r => r.json())
        .then(console.log)
        // .then(data => dispatch({type: "FETCH_BREWERIES", payload: data}))
        .catch(err => alert(err))

    }
}

