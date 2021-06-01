import React, { Component } from 'react'

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
            <div>
                <form>
                    <input name="name"
                    type="text" 
                    placeholder="Name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <input name="password"
                    type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                    <input 
                    type="password" 
                    placeholder="Confirm Password"
                    name="password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}/>
                    <button type="submit" className="submit__btn" onSubmit={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp