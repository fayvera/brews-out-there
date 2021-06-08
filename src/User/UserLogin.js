import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user.js'
import { withRouter } from "react-router";


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
            email: this.state.email, 
            password: this.state.password
        }
        // check credentials
        this.props.login(data)
        if(Object.keys(this.props).includes("user")){
            this.props.history.push('/home')
        } else {
            alert(
                "Something went wrong!"
            )
        }
    }



    render(){
        return(
            <div className="login">
            <form className="login_form" onSubmit={this.handleSubmit}>
                <h1>Log In</h1>
                <input 
                name="email"
                type="email" 
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}/><br></br>
                <input 
                name="password"
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}/><br></br>
                <button className="login__btn" type="submit" >LogIn</button>
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


export default withRouter(connect(mapStateToProps, {login} )(Login))