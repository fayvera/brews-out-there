import React, { Component } from 'react'
import {fetchBreweriesType, fetchByCity} from '../actions/fetchBreweries'
import Map from './GoogleMap'
import { connect } from 'react-redux';
import './search.css'

class Search extends Component {
    constructor(){
        super();
        this.state = {
            input: ''
            // checkboxes: {
            //     option1: 
            // }
        }
    }
    // search by location/zipcode/

    handleSubmit = event => {
        event.preventDefault();
        // look through breweries
        // fetchBreweries(event)
        const formatInput = this.state.input.split(' ').join('_').toLocaleLowerCase() 
        this.props.fetchByCity(formatInput)
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFilter = value => {
        debugger
        
        this.setState({
            type: value
        })
        const filteredData;
        if (value == ""){
            filteredData = this.props.data;
        } else {
            filteredData = this.props.data.filter(item => {
                return item.type === value;
            })
        }
        // can search by city, postal code, state, (or type)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    className="search-bar"
                    name="input"
                    value={this.state.input}
                    placeholder="Search by location"
                    onChange={this.handleChange}/>
                    <button
                    className="fas fa-search" 
                    type="submit" 
                    onSubmit={this.handleSubmit}/>
                    <i className="fas fa-ellipsis-v" onClick={this.handleFilter}></i>
                </form>
                <Map />
            </div>
        )   
    }
}


export default connect(null, {fetchBreweriesType, fetchByCity})(Search)