 const breweryReducer = (state = [], action) => {
    switch (action.type){
        case "FETCH_BREWERIES":
            return action.payload
        case "UPDATE_BREWERY":
            return state.map(brewery => action.payload.id === brewery.id ? action.payload : brewery)
        default: 
            return state
    }
}

export default breweryReducer