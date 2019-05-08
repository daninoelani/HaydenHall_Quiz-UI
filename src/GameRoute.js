import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom"
import NewUser from './NewUser'
import Home from './Home'
import Questions from './Questions'


class GameRoute extends Component {
   
// a function lives her that passed to new user as props and sets game route state
  render() {
    // console.log('hello')
    return (
      <Router>
        <div>
          <h1>Welcome to thee quiziest of quizzes!</h1>
          <ul className='Nav'>
            <li><NavLink exact to ="/">Home</NavLink></li>
            <li><NavLink to ="/NewUser">New User</NavLink></li>
            {/* <li><NavLink to ="/Questions">Questions</NavLink></li> */}
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/NewUser" component={NewUser}/>
            <Route exact path="/Questions" component={Questions}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default GameRoute;
