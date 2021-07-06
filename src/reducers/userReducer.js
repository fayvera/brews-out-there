const userReducer = (state = {}, action) => {
    switch (action.type){
    case "SIGN_UP":
        return action.payload.user
    case "LOG_IN":
        return action.payload.user
    case "FETCH_USER":
        return action.payload
    case "LOG_OUT":
        return {}
    case "UPDATE_USER":
        debugger
        return Object.assign({}, ...state.breweries, action.payload)
            // ...state, 
            // action.payload
        
    //     const brewery = state.find(brewery => brewery.id === action.payload.id)
        // return  brewery.state.liked ? unlike : like


        // when user likes a brewery
        
    default:
        return state
    }
  }
  export default userReducer


