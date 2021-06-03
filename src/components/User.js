import React from 'react'
import { currentUser } from '../actions/user.js'


export default function User(){

    console.log(currentUser.name)        
    
    
    return (
        <div>

        </div>
        // <>
        //     {/* <h1>Welcome, {this.props.user.name}</h1> */}
        // </>
    )
} 