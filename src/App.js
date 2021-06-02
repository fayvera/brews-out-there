import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'
import NavBar from './NavBar/NavBar'
import UserContainer from './components/UserContainer'
import {connect} from 'react-redux'


class App extends React.Component{
// helper functions


// no need for local state 
  // constructor(){
  //   super();
  // }

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

const mapStateToProps = state => {
  // debugger
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(App);
