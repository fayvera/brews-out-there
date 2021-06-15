import React from 'react'
import {connect} from 'react-redux'

function Favorites(){

    // const places = User.favorites.map((place, index) => {
    //     // retrieve data from api
    // })
    return(
        <div className="usr_favorites_div">
            <h1>My Favorite Places:</h1>
                <div className="list-brew">
                    {/* {liked.map((brewery, index) => {
                        <div key={index}> 
                            <h3>{brewery.name}</h3>
                            <p> Info about brewery</p>
                        </div> */}
                        // add link to brewery 
                        // location and info on brewery
                    {/* })} */}
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    debugger
    return {
        liked: state.user.breweries 
    }
}

export default connect(mapStateToProps)(Favorites)