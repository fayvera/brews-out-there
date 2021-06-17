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
    heart = () => {
        debugger
        this.state.user.breweries.find(this.props.selected) ? this.setState({
            liked: true
        }) : this.setState({
            liked: false
        })
    }

    handleLike = () => {
        // debugger
        this.setState({
            liked: !this.state.liked
        })
        const info = {brewery: this.props.brewery, user: this.props.user}
        this.props.like(info)
    }

    render(){
        return(
            <div className="like-btn">
                <button 
                onLoad={this.heart}
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
    // debugger
    return {
        liked: state.user.breweries,
        user: state.user
    }
}

export default connect(mapStateToProps, {like})(Breweries)