import React, { Component } from 'react'
import { connect } from 'react-redux';

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
            // complete signup
        }
    }
    

    render(){
        return(
            <div className='signup'>
                <form className="signup_form">
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
                    name="password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}/><br></br>
                    <button type="submit" className="submit__btn" onSubmit={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps)(SignUp)