import './App.css';
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import BreweriesContainer from './Brews/BreweriesContainer'
import NavBar from './NavBar/NavBar'
import UserContainer from './User/UserContainer'
import {connect} from 'react-redux'
import User from './User/User'
import Logout from './User/UserLogout'
import Login from './User/UserLogin'
// import SignUp from './User/UserSignUp'
import Landing from './Landing'
import Favorites from './User/UserFavorites'
import About from './About'


class App extends React.Component{


  // login functionality is not working 


  loggedIn = () => {
    if (this.props.user !== undefined && Object.keys(this.props.user).length > 0){  
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
        <>
          <Redirect to="/" component={Landing}/>
          {/* <Route path="/login" component={Login}/> */}
          {/* <Route path="/signup" component={Signup} /> */}
          {/* <Route path="/signup" component={Signup}/> */}
        </>
      )
    }
  }
  
  render(){ 
    return(
      <div className="main-page">
        <NavBar />
        <UserContainer />
        {this.loggedIn()}
        {/* <Landing /> */}
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
