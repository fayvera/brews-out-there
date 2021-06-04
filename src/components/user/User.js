import React from 'react'
import { currentUser } from '../../actions/user.js'
import Search from '../search'
import Map from '../GoogleMap'


export default function User(){
    // Map API 

    
    return (
        <div>
            <h3 className="wlcm-msg">Welcome! Let's find somewhere to go.</h3>
            <div className="search-bar">
                <Search />

            </div>

        </div>

    )
} 