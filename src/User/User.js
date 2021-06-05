import React from 'react'

import BreweriesContainer from '../Brews/BreweriesContainer.js'


export default function User(){
    // Map API 

    
    return (
        <div>
            <h3 className="wlcm-msg">Welcome! Let's find somewhere to go.</h3>
            <div className="search-bar">
                <BreweriesContainer />

            </div>

        </div>

    )
} 