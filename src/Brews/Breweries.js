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
        // debugger
        // this.props.user.breweries.include(this.props.selected) ? 
        // this.state = {
        //     liked: false
        // } : this.state ={
        //     liked: true
        // }
    }

    handleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
        const info = {brewery: this.props.brewery, user: this.props.user}
        debugger
        this.props.like(info)
    }


    render(){
        debugger
        return(
            <div className="like-btn">
                <button onClick={this.handleLike}>
                    {/* {this.props.liked && this.props.brewery ? */}
                    {this.props.user.liked.includes(this.props.brewery) ? 
                    <i className="fas fa-heart"></i>
                    : <i className="far fa-heart"></i>}
                    {/* //  : this.props.user  */}
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