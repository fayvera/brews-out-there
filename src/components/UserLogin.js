import React, { Component } from 'react';

// class User extends Component {
//     state = {
//         loggedIn: false
//     }

//     handleLogin = event => {
//         event.preventDefault()
//         // authenticate
//         // change state loggedIn to true
//     }

//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleLogin}>
//                     <input type="text" placeholder="Email"/>
//                     <input type="password" placeholder="Password"/>
//                 </form>
//             </div>
//         )
//     }
// }

// export default User


export const login = () => {
    // const [name, setName] =;

    return(
        <div className="login">
            <form className="login_form">
                <h1>Log In</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
            </form>
        </div>
    )
}