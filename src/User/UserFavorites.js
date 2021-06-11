import React from 'react'
import {connect} from 'react-redux'

function Favorites(){

    // const places = User.favorites.map((place, index) => {
    //     // retrieve data from api
    // })
    return(
        <div className="usr_favorites_div">
            <h1>My Favorite Places:</h1>
            
        </div>
    )
}

const mapStateToProps = state => {
    debugger
    return {
        liked: state.user.liked 
    }
}

export default connect(mapStateToProps)(Favorites)