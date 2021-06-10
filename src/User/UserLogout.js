import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/user.js'
import './user.css'
import { withRouter } from "react-router";


class Logout extends Component {

    handleLogout(){
        this.props.logout()
        localStorage.clear();
        this.props.history.push("/")
    }

    render(){
        return(
            <div>
                {this.handleLogout()}
            </div>
        )
    }

    
}


export default withRouter(connect(null, { logout })(Logout))