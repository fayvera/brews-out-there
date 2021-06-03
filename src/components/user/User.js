import React from 'react'
import { currentUser } from '../../actions/user.js'


export default function User(){

    // debugger 
    console.log(currentUser.name)        
    
    
    return (
        <div>
            <h1>Welcome</h1>

        </div>

    )
} 