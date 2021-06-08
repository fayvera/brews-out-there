import React from 'react' 
import './App.css'
import brew from './stylesheet/brew.png'


export default function Landing(){
    return(
        <div className="landing-page">
            <h1 className="title-name">BREW'S OUT THERE</h1>
            <h3>Please log in or sign up to search for the best breweries out there!</h3>
            <img className="navbar-logo" src={brew} alt="Logo" />
            
        </div>
    )
}

