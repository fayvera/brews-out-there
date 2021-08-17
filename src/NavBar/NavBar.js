import React, { Component } from 'react'
import './navbar.css'
import { MenuItems, Access} from './MenuItems'
import {connect} from 'react-redux'
import { withRouter} from "react-router";
import { Link } from "react-router-dom";

class NavBar extends Component {

    state = {clicked: false}

    handleMenu = e => {
        if(e.target.className !== "navbar-logo"){
            this.setState({
                clicked: !this.state.clicked
            })
        }
    }
    handleSelection = e => {
        e.preventDefault()
        this.props.history.push('/about')
        this.handleMenu(e)
    }

    loggedIn = () => {
           if(!this.props.validUser) { 
            //    if user is not logged in
            return (
                <div className="navbar-menu">
                    {Access.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </div>
                )
        } else {
            return(
            <>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} ></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                    return(
                        <li key={index} onClick={this.handleMenu}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}    
                            </Link>
                        </li>
                        )
                    })}
                 </ul>
            </>
            )
        }
    }



    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="navbar-items">  
                    {this.loggedIn()}
                    {/* {this.loggedIn == false ?  
                        // <img className="navbar-logo" src={brew} alt="Logo" onClick={this.handleSelection} />
                        : null   */}
                    {/* } */}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.user}
}   

export default withRouter(connect(mapStateToProps)(NavBar))