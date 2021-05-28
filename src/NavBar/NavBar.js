import React, { Component } from 'react'
import './navbar.css'
import brew from './brew.png'

class NavBar extends Component {
    menuItems = [
        {
            title: "Home",
            url: "#",
            cName: 'navbar-item'
        },
        {
            title: "Menu",
            url: '#',
            cName: 'navbar-item'
        },
    ]

    render(){
        console.log(brew)
        return(
            <nav className="navbar-items">
                <h1 className="navbar-logo"><img src={brew} alt="Logo" /></h1>
                <div className="menu-icon"></div>
                <ul>
                    {this.menuItems.map((item, index) => {
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