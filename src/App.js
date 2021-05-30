import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'
import NavBar from './NavBar/NavBar'


class App extends React.Component{

  // NavBar and Routes
  render(){
    return(
      <div>
        <NavBar />
        <Route path="/breweries">
          <BreweriesContainer />
        </Route>
      </div>
    )
  }
}

export default App;
