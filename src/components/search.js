import React, { Component } from 'react'
import fetchBreweries from '../actions/fetchBreweries'
import Map from './GoogleMap'

class Search extends Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
    // search by location/zipcode/

    handleSubmit = event => {
        event.preventDefault();
        // look through breweries
        // fetchBreweries(event)
    }
    
    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    name="input"
                    placeholder="Search by location"
                    onChange={this.handleChange}/>
                    <i class="fas fa-beer" type="submit" onSubmit={this.handleSubmit}></i>
                    {/* <input type="submit"  /> */}
                </form>
                <Map />
            </div>
        )   
    }
}

export default Search