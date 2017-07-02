import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Codigos from './component/codigos/codigos'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Menu from './component/home/menu'

const Home = () => (
  <div>
    <h2>Home</h2>
    <Codigos/>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <Codigos/>
  </div>
)

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with Reactddd
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Menu/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  </MuiThemeProvider>
)
export default BasicExample

/*


 import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import {
 BrowserRouter as Router,
 Route,
 Link
 } from 'react-router-dom'


 class App extends Component {
 render() {




 return (
 <div className="App">
 <div className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <h2>Welcome to React</h2>
 </div>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>
 </div>
 );
 }
 }

 export default App;
 */