 const breweryReducer = (state = [], action) => {
    switch (action.type){
        case "FETCH_BREWERIES":
            return action.payload
        case "UPDATE_BREWERY":
            debugger    
        default: 
            return state
    }
}

export default breweryReducer