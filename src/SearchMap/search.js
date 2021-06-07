import React, { Component } from 'react'
import {fetchBreweriesType, fetchByCity} from '../actions/fetchBreweries'
import Map from './GoogleMap'
import { connect } from 'react-redux';
import './search.css'
import Dropdown from './Dropdown'
import { Multiselect } from 'multiselect-react-dropdown'

class Search extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
            options: [{type: "Brewery"}, {type: "Pub"}]
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

    onSelect(selectedList, selectedItem){

    }

    items = [
        {id: 1, type: "micro"},
        {id: 2, type: "nano"},
        {id: 3, type: "regional"},
        {id: 4, type: "brewpub"},
        {id: 5, type: "large"},
        {id: 6, type: "planning"},
        {id: 7, type: "bar"},
        {id: 8, type: "contract"},
        {id: 9, type: "proprietor"},
        {id: 10, type: "closed"}

    ]
    handleFilter = () => {
        debugger
        <Dropdown items={this.items}/>

        // <Multiselect 
        // options={this.state.options}
        // selectedValues={this.state.selectedValues}
        // onSelect={this.onSelect}
        // onRemove={this.onRemove}
        // displayValue="type"
        // />

        // this.setState({
        //     type: value
        // })
        // const filteredData = ""
        // if (value == ""){
        //     filteredData = this.props.data;
        // } else {
        //     debugger
        //     filteredData = this.props.data.filter(item => {
        //         return item.type === value;
        //     })
        // }
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