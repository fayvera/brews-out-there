import React, {Component} from 'react';
import Search from './search'
class BreweriesContainer extends Component{

    render(){
        console.log(this)
        return(
            <div className="brewery-wrapper">
                <div className="search-bar"><Search /></div>
            </div>
        )
    }
}

export default BreweriesContainer;