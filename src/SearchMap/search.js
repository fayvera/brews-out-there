import React from 'react'
import {fetchBreweriesType, fetchByCity} from '../actions/fetchBreweries'
import { connect } from 'react-redux';
// import Map from './GoogleMap'
import './search.css'
import Dropdown from './Dropdown'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"

class Search extends React.Component {
    constructor(){
        super();
        this.state ={
            input: "",
        //     mapPosition: {
        //         lat: this.props.center.lat,
        //         lng: this.props.center.lng
        //     }, 
        //     markerPosition: 
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
            const formatInput = this.state.input.split(' ').join('_').toLocaleLowerCase() 
            this.handleSelect(formatInput)
            this.props.fetchByCity(formatInput)
 
        } else {
            alert("Please Input Location")
        }
        // debugger
        // this.props.placeMarkers(locations)
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







// function Search({ panTo }){
//     const {ready, 
//         value, 
//         suggestions: {status, data}, 
//         setValue,
//          setState,
//         clearSuggestions
//         } = usePlacesAutocomplete({
//         requestOptions: {
//             location: {lat: () => 40.730610, lng: () => -73.935242},
//             radius: 200 * 1000.
//         }
//     })

//         const handleSubmit = event => {
//             event.preventDefault();
//             const formatInput = this.state.input.split(' ').join('_').toLocaleLowerCase() 
//         if (this.state.input !== ""){
//             this.handleSelect(formatInput)
//             this.props.fetchByCity(formatInput)
 
//         } else {
//             alert("Please Input Location")
//         }
//         // debugger
//         this.props.placeMarkers(formatInput)
//     }
    
//     const handleSelect = async (address) => {
//         setValue(address, false);
//         clearSuggestions()
//         try {
//             const results = await getGeocode({address});
//             const { lat, lng } = await getLatLng(results[0])
//             panTo({ lat, lng });
//             const marker = this.props.markers ({
//                 // change the position to map over different locations received
//                 position: {lat, lng},
//                 title:"Hello World!"
//             });
//             marker.setMap({ lat, lng })
//         } catch (error){
//             console.log("error!")
//             }
//         }
        
//         const handleInput = (e) => {
//             setValue(e.target.value)
//         }

//         const items = [
//             {id: 1, type: "micro"},
//             {id: 2, type: "nano"},
//             {id: 3, type: "regional"},
//             {id: 4, type: "brewpub"},
//             {id: 5, type: "large"},
//             {id: 6, type: "planning"},
//             {id: 7, type: "bar"},
//             {id: 8, type: "contract"},
//             {id: 9, type: "proprietor"},
//             {id: 10, type: "closed"}
    
//         ]



//     return (
//         <div className="search-bar">
//             <Combobox onSelect={handleSelect}>

//                 {/* <form onSubmit={handleSubmit}>
//                     <input type="text" 
//                     disabled={!ready}
//                     value={value} 
//                     placeholder="Search by Location"
//                     onChange={handleInput}
//                     />
//                     <button type="submit"></button>
//                 </form> */}


//                 <ComboboxInput 
//                 value={value} 
//                 onChange={handleInput}
//                 disabled={!ready}
//                 placeholder="Search by Location"
//                 // onPanChange={handleSubmit}
//                 >
//                 </ComboboxInput>
                

//             <ComboboxPopover
//             className="search-popover">
//                 <ComboboxList>
//                     {status === "OK" && data.map(({id, description}) => (
//                     <ComboboxOption 
//                         key={id} 
//                         value={description}/>
//                         ))}
//                 </ComboboxList>
//             </ComboboxPopover>
//         </Combobox>
//         <Dropdown title="Filter" items={items} multiSelect/>
//     </div>
//     )
// }

// export default connect(null, { fetchByCity, fetchBreweriesType })(Search)