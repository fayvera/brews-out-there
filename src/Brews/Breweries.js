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

    handleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
        const info = {brewery: this.props.brewery, user: this.props.user}
        this.props.like(info)
    }

    render(){
        return(
            <div className="like-btn">
                <button onClick={this.handleLike}>
                    {this.props.liked.includes(this.props.brewery) ? 
                    <i className="fas fa-heart"></i>
                    : <i className="far fa-heart"></i>}
                </button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        liked: state.user.breweries,
        user: state.user
    }
}

export default connect(mapStateToProps, {like})(Breweries)