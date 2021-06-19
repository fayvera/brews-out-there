import React, { Component } from 'react'
import './breweries.css'
import { connect } from 'react-redux'
import { like } from '../actions/user'


class Breweries extends Component {
    constructor() {
        super();
        debugger
        this.props.user.breweries.include(this.props.selected) ? 
        this.state = {
            liked: false
        } : this.state ={
            liked: true
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
        debugger
        const info = {brewery: this.props.brewery, user: this.props.user}
        // const config = {
        // method: "PATCH", 
        // credentials: 'include', 
        // headers: {'Content-Type': 'application/json',
        // 'Accept': 'application/json'},
        // body: JSON.stringify({brewery: {...this.props.brewery}})
        // }

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