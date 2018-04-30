import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './Mycomponent';
import ListExampleSelectable from './List';
import Sheet from './Sheet';
import { log } from 'async';


class App extends Component {
  state = {
    visitor: '', 
    company: ''
  }

  setDatabase = data => {
    console.log(data)
    const visitor = data.visitor;
    const company = data.company;
    const logo = (company === "JIST") ? "./images/jist-logo.png"
       :  (company === "EMC") ? "./images/emc-logo.png"
       :  (company === "PES") ? "./images/pes-logo.png" 
       :  (company === "NML") ? "./images/nml-logo.png"
       :  './images/default.png';
    this.setState({
      visitor: visitor, 
      company: company,
      logo: logo
    })
  }
  render() {
    return (
      <div className="App">
        <Sheet setDatabase={this.setDatabase} />
        <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.visitor}</h1>
        </header>
        {this.state.company === "JIST" ? <h1>JIST was here</h1>: null}
        <p className="App-intro">
          To update the Welcome screen, select a name and click the 'Update' button.
        </p>
      </div>
    );
  }
}

export default App;