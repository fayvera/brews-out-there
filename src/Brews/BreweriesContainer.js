import React, {Component} from 'react';
// import Search from '../SearchMap/search'
import Map from '../SearchMap/GoogleMap'
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
        
        return(
            <div className="brewery-wrapper">
                {/* <div className="search-bar">
                    <Search />
                </div> */}
                <div className="map">
                    <Map />
                </div>
                <div className="brewery-div">
                    <Breweries /> 
                </div>
            </div>
        )
    }
}


export default connect(null, {fetchBreweriesType})(BreweriesContainer);