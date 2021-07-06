
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
            localStorage.setItem('token', res.jwt)
        })
        .catch(err => console.log(err))
    }
}

export const signup = (user) => {
    return function(dispatch) {
        fetch('http://localhost:3000/api/users', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Accept': 'application/json'},
            body: JSON.stringify({user})    
        })
        .then(r => r.json())
        .then(resp => dispatch({ type: 'SIGN_UP', payload: resp }))
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

export const currentUser = (config) => {
    return function(dispatch) {
        fetch(`http://localhost:3000/api/users/currentuser`, config)
        .then(r => r.json())
        .then(res => dispatch({ type: "FETCH_USER", payload: res}))
        .catch(err => console.log(err))
    }
}


export const like = (info) => {
    return function(dispatch){
        // debugger
        fetch(`http://localhost:3000/api/users/currentuser`, {
            method: "PATCH", 
            credentials: 'include', 
            headers: {'Content-Type': 'application/json',
            'Accept': 'application/json'},
            body: JSON.stringify({brewery: {...info.brewery}, user_id: info.user.id, user: {...info.user}})
        })
        .then(r => r.json())
        .then(brews => dispatch({ type: 'UPDATE_USER', payload: brews}))
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