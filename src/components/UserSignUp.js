import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../actions/user.js'

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    
    handleSubmit = event => {
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword){
            alert(
                "Passwords don't match!"
            )
            this.setState({confirmPassword: ''})
        } else {
            debugger
            // complete signup
        }
    }
    

    render(){
        return(
            <div className='signup'>
                <form className="signup_form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <input name="name"
                    type="text" 
                    placeholder="Name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/><br></br>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    /><br></br>
                    <input name="password"
                    type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}/><br></br>
                    <input 
                    type="password" 
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}/><br></br>
                    <button type="submit" className="submit__btn" >Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {signup})(SignUp)