
export const login = (data = {}) => {
    return function(dispatch){
        fetch('http://localhost:3000/api/auth', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Accept': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({ data })    
        })
        .then(r=> r.json())
        .then(console.log)
        .then(res => {localStorage.setItem('token', res.data.token)})
        .then({ type: "LOG_IN", payload: data})
        .catch(err => console.log(err))
    }
}

export const signup = (user = {}) => {
    return function(dispatch) {
        fetch('http://localhost:3000/api/users', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Accept': 'application/json'},
            body: JSON.stringify({user})    
        })
        .then(console.log)
        .then(r => r.json())
        .then({ type: 'SIGN_UP', payload: user })
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
        .then(console.log)
    }
}

export const currentUser = (user) => {
    return function(dispatch) {
        fetch(`http://localhost:3000/api/user/${user.id}`)
        .then(r => r.json())
        // set state with user data
        // if no data, user is not logged in
        .then(r => r.json())
        .then({ type: "FETCH_USER", payload: user})
        .catch(err => console.log(err))
    }
}