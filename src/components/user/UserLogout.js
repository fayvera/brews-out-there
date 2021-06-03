import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { logout } from '../../actions/user.js'
// import User from './User'
import { withRouter } from "react-router";


class Logout extends Component {

    appLogout(){
        debugger

        this.props.logout()
        this.setState({
            user: {}
        })
        localStorage.clear();
        window.location.href = '/';
    }

    render(){
        return(
            <div>
                {this.appLogout()}
            </div>
        )
    }

    
}


export default withRouter(Logout)