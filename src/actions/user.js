const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)    
}

export const login = data => {
    return function(dispatch){
        fetch('http://localhost:3000/api/auth', options)
        .then(r=> r.json())
        .then({ type: "LOG_IN", payload: data})
    }
}

export const signup = (data = {}) => {
    return function(dispatch) {
        fetch('http://localhost:3000/api/users', options)
    .then(r => r.json())
    .then({ type: 'SIGN_UP', payload: data })
    }
}