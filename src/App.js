import './App.css';
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'
import NavBar from './NavBar/NavBar'
import UserContainer from './components/user/UserContainer'
import {connect} from 'react-redux'
import User from './components/user/User'
import Logout from './components/user/UserLogout'
import Landing from './Landing'
import Favorites from './components/user/UserFavorites'
import About from './About'


class App extends React.Component{


  // login functionality is not working 


  loggedIn = () => {
    if (this.props.user !== {} ){
    // if (Object.keys(this.props.user).length > 1 ){

      return(
        // if user is logged in, they should be taken to user component "/home"
        // user shouldn't be able to access any of these routes if not logged in 
        <>  
          <Route path="/home" component={ User } />
          <Route path="/breweries" component={ BreweriesContainer } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/logout" component={ Logout }/>
          <Route path="/about" component={About} />
        </>
      )
    } else {
      return(
        // create landing page when user is not logged in 
        <Redirect to="/" component={Landing}/>
      )
    }
  }
  
  render(){ 
    return(
      <div className="main-page">
        <NavBar />
        <UserContainer />
        {/* <Landing /> */}
        {this.loggedIn()}
        {/* include welcome message */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(App);
