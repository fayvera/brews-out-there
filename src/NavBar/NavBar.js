import React, { Component } from 'react'
import './navbar.css'
import brew from './brew.png'
import { MenuItems } from './MenuItems'
import {connect} from 'react-redux'

class NavBar extends Component {

    state = {clicked: false}

    // create helper method to check if user is logged in
    loggedIn = () => {

    }



    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="navbar-items">
                <img className="navbar-logo" src={brew} alt="Logo" />
                {/* not logged in ? display signup/login : search */}
                {/* { store.getState(user) ? <div></div> : <div></div>} */}
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                      return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}    
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {user: state.user}
}   

export default connect(mapStateToProps)(NavBar)