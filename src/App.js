// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'

class App extends React.Component{

  // NavBar and Routes
  render(){
    return(
      <div>
        <Route path="/breweries">
          <BreweriesContainer />
        </Route>
      </div>
    )
  }
}

export default App;
