import React, { Component } from 'react'
import './navbar.css'
import brew from './brew.png'
import { MenuItems, Access} from './MenuItems'
import {connect} from 'react-redux'
import Login from '../components/UserLogin'

class NavBar extends Component {

    state = {clicked: false}

    // create helper method to check if user is logged in
    loggedIn = () => {
        console.log(this.props.user == {})
        if(Object.keys(this.props.user).length === 0){
            return (
            <div>
                {Access.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </div>
            )
        } else {
            return(<>
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
            </>
            )
        }
    }



    handleClick = () => {
        // debugger
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="navbar-items">
                <img className="navbar-logo" src={brew} alt="Logo" />
                    {this.loggedIn()}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {user: state.user}
}   

export default connect(mapStateToProps)(NavBar)