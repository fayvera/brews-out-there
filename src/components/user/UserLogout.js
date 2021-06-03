import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { login } from '../../actions/user.js'
import User from './User'
import { withRouter } from "react-router";


class Logout extends Component {
    constructor(){
        super();
    }


    render(){
        return(
            <div>
                
            </div>
        )
    }

    
}


export default withRouter(Logout)