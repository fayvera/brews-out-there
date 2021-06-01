import React from 'react'

const Search = () => {

//    const handleSubmit = event => {
//         event.preventDefault();

//     }

    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search by location"/><br></br>
                <input type="submit"  />
            </form>
        </div>
    
    )
    
}

export default Search