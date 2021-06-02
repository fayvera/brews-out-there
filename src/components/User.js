import React from 'react'
import { currentUser } from '../actions/user.js'


export default function User(props){


    return (
        console.log(currentUser)
        // <>
        //     <h1>Welcome, {currentUser.user.name}</h1>
        // </>
    )
} 