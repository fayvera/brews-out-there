import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user.js'


//     handleLogin = event => {
//         event.preventDefault()
//         // authenticate
//         // change state loggedIn to true
//     }




class Login extends Component {
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
    
    handleSubmit = e => {
        e.preventDefault()
        const data = {
            email: this.email, 
            password: this.password
        }
        
        this.props.login(data)

    }

    // if state values are empty, user is not logged in 


    render(){
        return(
            <div className="login">
            <form className="login_form">
                <h1>Log In</h1>
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
                <button className="login__btn" type="submit" onSubmit={this.handleSubmit}>LogIn</button>
            </form>
        </div>
    )
    }
}


export default connect(null, {login})(Login)