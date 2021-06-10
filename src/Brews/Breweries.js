import React, { Component } from 'react'
import './breweries.css'
import { connect } from 'react-redux'


class Breweries extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        }
    }
    breweries = (props) => {
        console.log(props)
    }

    handleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
        this.breweries()
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
    // debugger
    // return {
    //     liked: state.liked
    // }
}

export default connect(mapStateToProps)(Breweries)