export default function login(){
    return function(dispatch){
        fetch('http://localhost:3000/')
    }
}

export const signup = (user = {}) => {
    return function(dispatch) {
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)    
    })
    .then(r => r.json())
    .then({ type: 'SIGN_UP', payload: user })
    }
}