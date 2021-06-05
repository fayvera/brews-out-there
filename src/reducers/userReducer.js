const userReducer = (state = {user: {}}, action) => {
    switch (action.type){
    case "SIGN_UP":
        return {
            ...state, 
            user: action.payload.user
        }
    case "LOG_IN":
        return {
            ...state, 
            user: action.payload.user
        }
    case "FETCH_USER":
        return {user: action.payload}
    case "LOG_OUT":
        return {
            ...state,
            user: {}
        }
    // case "UPDATE_USER":
        // when user likes a brewery
     


    // case "DELETE_USER":
    //   return state.filter(user => user.id !== action.user.id)
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


