import React, { Component } from 'react';
import SignUp from './UserSignUp';
import Login from './UserLogin'
import {Route, Switch} from 'react-router-dom'
import {currentUser, login, signup} from '../actions/user.js'
import { connect } from 'react-redux';

class UserContainer extends Component {

    // if state is empty, user is not logged in
    

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        this.props.currentUser(config)
        // set state to user info from action "currentUser"
    }

    handleSignIn = () => {

    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/signup" >
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    {/* create buttons for login and signup */}
                    <button className="login" onClick={this.handleSignIn}>Log In</button><br>
                    </br>
                    <button className="signup">Sign Up</button>
                </Switch>
            </div>
        )
    }
}
// mapStateToProps to keep track of current state

const mapStateToProps = state => {
    // debugger
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { currentUser, login, signup})(UserContainer)