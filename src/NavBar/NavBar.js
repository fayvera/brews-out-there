import React, { Component } from 'react'
import './navbar.css'
import brew from './brew.png'
import { MenuItems } from './MenuItems'

class NavBar extends Component {

    state = {clicked: false}

    // create helper method to check if user is logged in
    handleClick = () => {
        
    }

    render(){
        console.log(brew)
        return(
            <nav className="navbar-items">
                <img className="navbar-logo" src={brew} alt="Logo" />
                <div className="menu-icon"></div>
                {/* not logged in ? display signup/login : search */}
                <ul >
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

export default NavBar