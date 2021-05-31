import { render } from '@testing-library/react'
import React from 'react'

export const signUp = () => {
    // email: '',
    // password: '',
    // confirm_password: ''

    return(
        <div className="login">
            <form className="login_form">
                <h1>Log In</h1>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
            </form>
        </div>
    )
}