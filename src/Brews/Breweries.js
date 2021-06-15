import React, { Component } from 'react'
import './breweries.css'
import { connect } from 'react-redux'
import { like } from '../actions/user'

class Breweries extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        }
    }
    // breweries = (props) => {
    //     console.log(props)
    //     debugger
    // }

    handleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
        debugger
        const brewery = this.props.brewery
        this.sendLike(brewery)
        // action creator 
    }

    sendLike = (brewery) => {
        debugger
        
    }


    render(){
        return(
            <div className="like-btn">
                <button 
                onClick={this.handleLike}
                >
                {this.state.liked === false ? <i className="far fa-heart"></i>
                 : <i class="fas fa-heart"></i> 
                 }
            </button>
               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        liked: state.user.breweries
    }
}

export default connect(mapStateToProps, {like})(Breweries)