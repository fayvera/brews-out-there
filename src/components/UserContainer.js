import React, { Component } from 'react';
import { signUp } from './UserSignUp';
import { login } from './UserLogin'

class UserContainer extends Component {
    handleClick = () => {

    }

    render(){
        console.log("helly")
        return(
            <div>
                
                {/* create buttons for login and signup */}
                {/* <button className="login" onClick={this.handleClick}>Log In</button><br>
                </br>
                <button className="signup">Sign Up</button> */}
                {/* <login />
                <signUp /> */}
                {/* < login >
                </login> */}
            </div>
        )
    }
}

export default UserContainer