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

  toggleSidebar = () =>{
    this.setState(prevState => {
        return {showSidebar: !prevState.showSidebar}
    })
  }

  render() {
    return (
      <div className="App">
        App goes here.
        <Sidebar showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
      </div>
    );
  }
}


export default App;
