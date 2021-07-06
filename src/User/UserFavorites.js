import React from 'react'
import {connect} from 'react-redux'
// import { useState } from 'react'

function Favorites(props){

    // debugger

    return(
        <div className="usr_favorites_div">
            <h1>My Favorite Places:</h1>
                <div className="list-brew"> 
                    {props.liked.map((brewery, index) => (
                        <div classname="fav-brewery" key={index}> 
                            <h3>{brewery.name}</h3>
                            <h4>Type: {brewery.brewery_type}</h4>
                            {brewery.phone ? 
                            <i class="fa fa-phone" aria-hidden="true"> {brewery.phone} </i>
                            : null}
                            <div className= "website">
                            {brewery.website ? <h5>Website: <a>{brewery.website}</a></h5> : null}
                            </div>
                        </div>

          
                        // add link to brewery 
                        // location and info on brewery

                    ))} 
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        liked: state.user.breweries 
    }
}

export default connect(mapStateToProps)(Favorites)