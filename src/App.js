import React from 'react';
import './App.css';

import Sidebar from './components/sidebar'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      showSidebar: false
    }
  }
  render() {
    return (
      <div className="App">
        App goes here.
        <Sidebar shown={this.state.showSidebar}/>
      </div>
    );
  }
}


export default App;
