import React from 'react';
import './App.css';
import data from './features.geojson-2.json';
import ReactMapGL from 'react-map-gl';

import Sidebar from './components/sidebar'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      showSidebar: false,
      viewport: {
        width: 1000,
        height: 1000,
        latitude: 33.44,
        longitude: -94.05,
        zoom: 12
      },
      schools: [...data.features],
      API_KEY: 'pk.eyJ1IjoiYW5kcmllbGxlaCIsImEiOiJjanl1cm96bGIwNDkwM21taXhwdzI4YTh1In0.h4LtxhhhtJFzWbBAwSAtrg'
    }
  }

  toggleSidebar = () =>{
    this.setState(prevState => {
        return {showSidebar: !prevState.showSidebar}
    })
  }

  render() {
    console.log(data.features)
    return (
      <div className="App">
        App goes here.
        <Sidebar showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <ReactMapGL
          mapboxApiAccessToken={this.state.API_KEY}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </div>
    );
  }
}


export default App;
