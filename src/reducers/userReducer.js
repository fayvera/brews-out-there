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
    // case "UPDATE_USER":
        // when user likes a brewery
    // case "LIKE":
    //   index = state.findIndex(quote => quote.id === action.quoteId)
    //   quote = state[index]
    //   return [
    //     ...state.slice(0, index),
    //     Object.assign({}, quote, {votes: quote.votes += 1}),
    //     ...state.slice(index+1)
    //   ];
        // case "UNLIKE":
        
    default:
        return state
    }
  }
  export default userReducer


