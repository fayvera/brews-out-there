import './App.css';
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import BreweriesContainer from './components/BreweriesContainer'
import NavBar from './NavBar/NavBar'
import UserContainer from './components/user/UserContainer'
import {connect} from 'react-redux'
import User from './components/user/User'
import Logout from './components/user/UserLogout'
import Favorites from './components/user/UserFavorites'


class App extends React.Component{

  loggedIn = () => {
    if((Object.keys(this.props.user).length !== 1) && (Object.keys(this.props.user) !== 0)){
      return(
        <>  
          <Route path="/home" component={User} />
          <Route path="/breweries" component={BreweriesContainer} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/logout" component={Logout}/>
        </>
      )

    } else {
      return(
        <Redirect to="/" />
      )
    }
  }
  
  render(){ 
    return(
      <div>
        <NavBar />
        <UserContainer />
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
