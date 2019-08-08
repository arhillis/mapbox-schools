import React from 'react';
import './App.css';
import data from './features.geojson-2.json';

import Sidebar from './components/sidebar';
import Map from './components/map';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      showSidebar: false,
      viewport: {
        width: 700,
        height: 700,
        latitude: 33.43,
        longitude: -94.05,
        zoom: 11.5
      },
      schools: [...data.features],
      selectedSchool: null,
      API_KEY: 'pk.eyJ1IjoiYW5kcmllbGxlaCIsImEiOiJjanl1cm96bGIwNDkwM21taXhwdzI4YTh1In0.h4LtxhhhtJFzWbBAwSAtrg'
    }
  }

  toggleSidebar = () =>{
    this.setState(prevState => {
        return {showSidebar: !prevState.showSidebar}
    })
  }  

  showSchool = (school) =>{
    this.setState({selectedSchool: school})
  }

  render() {
    const {API_KEY, viewport, schools, selectedSchool} = this.state;

    console.log(selectedSchool || "Pick a school!")

    return (
      <div className="App">
        <Sidebar 
          schools={schools}
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <Map API_KEY={API_KEY}
          viewport={{...viewport}}
          schools={[...schools]}
          showSchool={this.showSchool}
          selectedSchool={selectedSchool}
        />
        
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank"
            rel="noopener noreferrer"
        >CC 3.0 BY</a></div>
      </div>
    );
  }
}


export default App;
