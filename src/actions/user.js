
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
        .then(res => {Storage.setItem('token', res.token)})
        // .then({ type: "LOG_IN", payload: data})
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
        .catch(err => console.log(err))
    // .then(r => r.json())
    // .then({ type: 'SIGN_UP', payload: user })
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