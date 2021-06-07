import React, { Component } from 'react';
import SignUp from './UserSignUp';
import Login from './UserLogin'
import User from './User'
import {Route, Switch} from 'react-router-dom'
import {currentUser, login, signup, logout} from '../actions/user.js'
import { connect } from 'react-redux';
import Favorites from './UserFavorites'
import Logout from './UserLogout'



class UserContainer extends Component {


    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            credentials: "include",
            method: "GET"
        }
        this.props.currentUser(config)
    }

    isLoggedIn = () => {
        if (Object.keys(this.props.user).length === 0 || this.props.user === undefined){
            // if user is not logged in 
            return (
                <>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </Switch>
                </>
                )
            } else {
                return(
                    <div>
                        <Switch>
                            {/* <Route path="/about" component={About}/> */}
                            <Route path="/home" component={User} />
                            <Route path ="/favorites" component={Favorites}/>
                            <Route path="/logout" component={Logout} />
                        </Switch>
                    </div>
                    )
                }
        }   

    render(){
        return(
            <div>
                {this.isLoggedIn()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { currentUser, login, signup, logout})(UserContainer)