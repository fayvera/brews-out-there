import React, { Component } from 'react'

class NavBar extends Component {

    render(){
        return(
            <nav className="navbar-items">
                <h1 className="navbar-logo"></h1>
                <div className="menu-items"></div>
            </nav>
        )
    }
}

export default NavBar