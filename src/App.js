import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Codigos from './component/codigos/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Menu from './component/home/menu'
import CodigoDetail from './component/codigos/components/codigoDeail'
const Home = () => (
  <div>
    <h2>Codigos</h2>
    <Codigos/>
  </div>
)

/*
const Codigos = () => (
  <div>
    <h2>Codigos</h2>
    <Codigos/>
  </div>
)

*/

const Commands = ({match}) => (
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

    <Route path={`${match.url}/:topicId`} component={Commands}/>
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
          <li><Link to="/codigos">Codigos</Link></li>
          <li><Link to="/codigos/1234">Codigo detalle</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route  exact path="/codigos" component={Codigos}/>
        <Route path="/codigos/:idCodigo" component={CodigoDetail}/>
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