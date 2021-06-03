import React, { Component } from 'react';
import SignUp from './UserSignUp';
import Login from './UserLogin'
import User from './User'
import {Route, Switch} from 'react-router-dom'
import {currentUser, login, signup} from '../../actions/user.js'
import { connect } from 'react-redux';
// import User from './User'

class UserContainer extends Component {

    // if state is empty, user is not logged in
    

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        this.props.currentUser(config)
    }

    isLoggedIn = () => {
        if (Object.keys(this.props.user).length === 0){
            return (
                <>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </>
                )
            } else {
                return(
                    <div>
                        <Route path="/home" component={User} />
                    </div>
                    )
                }
        }   

    render(){
        return(
            <div>
                <Switch>
                    {/* <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} /> */}
             
                    {/* create buttons for login and signup */}
                    {/* <button className="login" onClick={this.handleSignIn}>Log In</button><br>
                    </br>
                <button className="signup">Sign Up</button> */}
                    {this.isLoggedIn()}
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