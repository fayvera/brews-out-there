import React from 'react'
import { currentUser } from '../../actions/user.js'


export default function User(){


        //   search bar goes here 
        console.log()
    
    return (
        <div>
            <h1>Welcome {currentUser.payload}</h1>

        </div>

    )
} 