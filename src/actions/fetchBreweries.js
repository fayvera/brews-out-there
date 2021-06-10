
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

