 const breweryReducer = (state = [], action) => {
     debugger
    switch (action.type){
        case "FETCH_BREWERIES":
            return action.payload
        case "UPDATE_BREWERY":
            debugger    
            return
        default: 
            return state
    }
}

export default breweryReducer