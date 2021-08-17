import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import UserContainer from './User/UserContainer'
import {connect} from 'react-redux'
import Landing from './Landing'
import About from './About'



class App extends React.Component{


  validUser = () => (Object.keys(this.props.user).length > 0 && this.props.user.status !== 500 && this.props.user !== undefined)


  loggedIn = () => {
    if (this.validUser()){  
      return(
        <>  
          <Route path="/about" component={About} />
        </>
      )
    } else {
      return(
        <>
          <Route path="/" component={Landing}/>
        </>
      )
    }
  }
  
  render(){ 
    return(
      <div className="main-page">
        <NavBar validUser={this.validUser()}/>
        <UserContainer validUser={this.validUser()}/>
        {this.loggedIn()}
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
