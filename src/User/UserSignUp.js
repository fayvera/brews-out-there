import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signup } from '../actions/user.js'
// import User from './User'
import { withRouter } from 'react-router'

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

    handleCredentials = () => {
        // look through all users in database. If email matches, user is not valid
        // if( this.state.email )
    }
    
    handleSubmit = event => {
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword){
            alert(
                "Passwords don't match!"
            )
            this.setState({confirmPassword: ''})
        } else if (this.state.password === ""){
            alert (
                "Please create a password!"
            )
        } else {
            const user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            this.props.signup(user)
            this.props.history.push('/home')
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

export default withRouter(connect(mapStateToProps, {signup})(SignUp))