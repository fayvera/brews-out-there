import React, { Component } from 'react'
import './navbar.css'
import brew from './brew.png'
import { MenuItems } from './MenuItems'

class NavBar extends Component {


    state = {clicked: false}

    render(){
        console.log(brew)
        return(
            <nav className="navbar-items">
                <img className="navbar-logo" src={brew} alt="Logo" />
                <div className="menu-icon"></div>
                <ul>
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