import React from 'react';
import logo from './logo.svg';

import './App.css';
import Dashboard from './containers/Dashboard';
import Page_Admin from './containers/Page_Admin';
import Nav from './containers/Nav';
import Footer from './containers/Footer';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = { 
      dash: true,
      admin: false,
    }
  }

  changerPage = (e) => {
    this.setState({
      dash: !this.state.dash,
      admin: !this.state.admin
    });
  }

  render()
  {
    return (
      <div className="App">
          <Nav changer={this.changerPage} etat={this.state.dash}/>
          {this.state.dash && (
            <Dashboard />
          )}
          {this.state.admin && (
            <Page_Admin/>
          )}          
        <Footer/>
      </div>
    );
  }
}

export default App;
