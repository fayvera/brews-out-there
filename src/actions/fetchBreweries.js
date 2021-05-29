// export const fetchBreweries = brewery => {
//     return {
//         type: "GET_BREWERY",
//         brewery: Object.assign({}, brewery)
//     }
// }

// export const findBrewery = breweryName => {
//     return {
//         type: "FIND_BREWERY",
//         breweryName
//     }
// }

// export const likeBrewery = breweryName => {
//     return {
//         type: "LIKE_BREWERY", 
//         breweryName
//     }
// }

// export const unlikeBrewery = breweryName => {
//     return {
//         type: "UNLIKE_BREWERY", 
//         breweryName
//     }
// }


export default function fetchBreweries() {
    return function(dispatch) {
        // get API endpoint
        // API Key: 146b43ffb6327bc038cfa22b17dc71ac
        fetch('https://api.openbrewerydb.org/breweries')
        .then(r => r.json())
        .then(console.log)
        // .then(data => dispatch({type: "FETCH_BREWERIES", payload: data}))
    }
}