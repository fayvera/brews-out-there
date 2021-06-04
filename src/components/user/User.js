import React from 'react'
import { currentUser } from '../../actions/user.js'
import Search from '../search'
import Map from '../GoogleMap'


export default function User(){
    // Map API 

    
    return (
        <div>
            <h1>Welcome</h1>
            <div className="search-bar">
                <Search />

            </div>

        </div>

    )
} 