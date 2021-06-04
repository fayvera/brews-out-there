import React, {Component} from 'react';
import Search from '../SearchMap/search'
import Breweries from './Breweries'
import { connect } from 'react-redux';
import {fetchBreweriesType} from '../actions/fetchBreweries'

class BreweriesContainer extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         breweries: []
    //     }
    // }
    

    // componentDidMount = () => {
    //     fetch("https://api.openbrewerydb.org/breweries")
    //     .then(resp => resp.json())
    //     .then(data => this.setState(
    //         console.log(data)
    //     ))

    // }

    render(){
        console.log(this)
        return(
            <div className="brewery-wrapper">
                <div className="search-bar">
                    <Search />
                </div>
                
                <Breweries />
            </div>
        )
    }
}


export default connect(null, {fetchBreweriesType})(BreweriesContainer);