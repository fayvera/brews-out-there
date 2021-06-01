import React, { Component } from 'react';
import signUp from './UserSignUp';
import Login from './UserLogin'
import {Route, Switch} from 'react-router-dom'

class UserContainer extends Component {

    componentDidMount(){

    }
    
    handleSignIn = () => {

    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/signup" >
                        <signUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    {/* create buttons for login and signup */}
                    <button className="login" onClick={this.handleSignIn}>Log In</button><br>
                    </br>
                </Switch>
                    <button className="signup">Sign Up</button>
            </div>
        )
    }
}

// use connect, add second argument from actions to fetch user
export default UserContainer