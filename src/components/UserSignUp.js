import React from 'react'

export const signUp = () => {
    // email: '',
    // password: '',
    // confirm_password: ''
    return(
        <div>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button type="submit" className="submit__btn">Sign Up</button>
            </form>
        </div>
    )

}