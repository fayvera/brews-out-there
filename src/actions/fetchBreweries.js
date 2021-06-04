
export const fetchByCity = input => {
    return function(dispatch) {
        fetch(`https://api.openbrewerydb.org/?by_city=${input}`)
    }
}


export const fetchBreweriesType = (data) => {
    return function(dispatch) {
        fetch('https://api.openbrewerydb.org/breweries')
        .then(r => r.json())
        .then(console.log)
        .then(data => dispatch({type: "FETCH_BREWERIES", payload: data}))
    }
}