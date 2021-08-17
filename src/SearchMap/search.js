import React from 'react'
import {fetchBreweriesType, fetchByCity} from '../actions/fetchBreweries'
import { connect } from 'react-redux';
import './search.css'
import Dropdown from './Dropdown'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"

class Search extends React.Component {
    constructor(){
        super();
        this.state ={
            input: "",
            searches: []
        }
    }

   handleSelect = async (address) => {
        try {
            const results = await getGeocode({address});
            const { lat, lng } = await getLatLng(results[0])
            this.props.panTo({ lat, lng });
        } catch (error){
            console.log("error!")
            }
        }
    


    handleSubmit = event => {
        event.preventDefault();
    
        if (this.state.input !== ""){
            const formatInput = this.state.input.trim().split(' ').join('_').toLocaleLowerCase() 
            this.handleSelect(formatInput)
            this.props.fetchByCity(formatInput)
        } else {
            alert("Please Input Location")
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                    {/* <i className="fas fa-ellipsis-v" onClick={this.handleFilter}></i> */}
                </form>
                    <Dropdown title="Filter" items={this.items} multiSelect/>
            </div>
        )   
    }
}


export default connect(null, {fetchBreweriesType, fetchByCity})(Search)


