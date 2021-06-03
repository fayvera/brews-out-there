
export const login = (data) => {
    return function(dispatch){
        fetch('http://localhost:3000/api/auth', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Accept': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({ ...data })    
        })
        .then(r => r.json())
        .then(res => {
            dispatch({ type: "LOG_IN", payload: res})
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => console.log(err))
    }
}

export const signup = (user) => {
    debugger
    return function(dispatch) {
        fetch('http://localhost:3000/api/users', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Accept': 'application/json'},
            body: JSON.stringify({user})    
        })
        .then(r => r.json())
        .then(resp => dispatch({ type: 'SIGN_UP', payload: user }))
        .catch(err => console.log(err))
    }
} 

export const logout = () => {
    return function(dispatch) {
        fetch('http://localhost:3000/api/auth', {
            method: "DELETE",
            credentials: 'include'
        })
        .then(r => r.json())
        .then(r => dispatch({type: 'LOG_OUT', payload: r}))
        .catch(err => console.log(err))
    }
}

export const currentUser = (user) => {
    return function(dispatch) {
        fetch(`http://localhost:3000/api/user/${user.id}`)
        .then(r => r.json())
        // set state with user data
        // if no data, user is not logged in
        .then({ type: "FETCH_USER", payload: user})
        .catch(err => console.log(err))
    }
}

// export const allUsers = () => {
//     return function(dispatch){
//         fetch('http://localhost:3000/api/users')
//         .then(r => r.json())
//         .then({ type: "ALL_USERS", payload: user})
//     }
// }