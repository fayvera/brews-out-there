const breweryReducer = (state = [], action) => {
    switch (action.type){
        case "FETCH_BREWERY":
            return{
                ...state,
                brewery: action.payload.brewery
            }
        
        default: 
            return state
    }
}