import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'
import NavBar from './NavBar/NavBar'
import UserContainer from './components/user/UserContainer'
import {connect} from 'react-redux'
import User from './components/user/User'


class App extends React.Component{

  loggedIn = () => {
    if(Object.keys(this.props.user).length === 0){
      // debugger
      return(
        <>  
          <Route path="/home" component={User} />
          <Route path="/breweries" component={BreweriesContainer} />
        </>
      )
    }
  }
  
  render(){ 
    return(
      <div>
        <NavBar />
        <UserContainer />
        {/* {this.loggedIn()} */}
        <Route path="/home" component={User} />
        <Route path="/breweries" component={BreweriesContainer} />
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
