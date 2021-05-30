import React, { Component } from 'react';

class User extends Component {
    state = {
        loggedIn: false
    }

    handleLogin = () => {

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </form>
            </div>
        )
    }
}

export default User