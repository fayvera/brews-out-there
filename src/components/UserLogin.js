import React, { Component } from 'react';


//     handleLogin = event => {
//         event.preventDefault()
//         // authenticate
//         // change state loggedIn to true
//     }




export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    render(){
        return(
            <div className="login">
            <form className="login_form">
                <h1>Log In</h1>
                <input 
                name="name"
                type="text" 
                placeholder="Name" 
                value={this.state.name} 
                onChange={this.handleChange}/>
                <input 
                name="email"
                type="email" 
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}/>
                <input 
                name="password"
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </form>
        </div>
    )
    }
}