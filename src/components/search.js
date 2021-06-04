import React, { Component } from 'react'
import fetchBreweries from '../actions/fetchBreweries'

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
                    onChange={this.handleChange}/><br></br>
                    <input type="submit"  />
                </form>
            </div>
        )   
    }
}

export default Search