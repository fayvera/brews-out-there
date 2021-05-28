import React, {Component} from 'react';
import Search from './search'
import Breweries from './Breweries'

class BreweriesContainer extends Component{
    constructor(){
        super();
        this.state = {
            breweries: []
        }
    }

    componentDidMount = () => {
        fetch("https://api.openbrewerydb.org/breweries")
        .then(resp => resp.json())
        .then(console.log)

    }

    render(){
        console.log(this)
        return(
            <div className="brewery-wrapper">
                <div className="search-bar"><Search /></div>
                <Breweries />
            </div>
        )
    }
}

export default BreweriesContainer;