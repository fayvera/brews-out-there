 const breweryReducer = (state = [], action) => {
    switch (action.type){
        case "FETCH_BREWERIES":
            return action.payload
        default: 
            return state
    }
}

export default breweryReducer