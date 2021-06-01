import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'
import NavBar from './NavBar/NavBar'
import UserContainer from './components/UserContainer'


class App extends React.Component{
// helper functions

  // NavBar and Routes
  render(){
    return(
      <div>
        <NavBar />
        <UserContainer />
    

          <Route path="/breweries">
            <BreweriesContainer />
          </Route>
      </div>
    )
  }
}



export default App;
