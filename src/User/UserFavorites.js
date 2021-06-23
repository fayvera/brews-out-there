import React from 'react'
import {connect} from 'react-redux'
import { useState } from 'react'

function Favorites(props){

    // const [likes, setLiked] = useState([])
    // const {liked} = props.liked
    debugger

    return(
        <div className="usr_favorites_div">
            <h1>My Favorite Places:</h1>
                <div className="list-brew"> 
                    {props.liked.map((brewery, index) => (
                        <div classname="fav-brewery" key={index}> 
                            <h3>{brewery.name}</h3>
                            <p> Info about brewery</p>
                            <h4>{brewery.type}</h4>
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