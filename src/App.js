import React from 'react';
import './App.css';
import data from './features.geojson-2.json';
import ReactMapGL, {Marker} from 'react-map-gl';

import Sidebar from './components/sidebar'

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
      API_KEY: 'pk.eyJ1IjoiYW5kcmllbGxlaCIsImEiOiJjanl1cm96bGIwNDkwM21taXhwdzI4YTh1In0.h4LtxhhhtJFzWbBAwSAtrg'
    }
  }

  toggleSidebar = () =>{
    this.setState(prevState => {
        return {showSidebar: !prevState.showSidebar}
    })
  }

  

  render() {
    const {API_KEY, viewport, schools} = this.state;

    return (
      <div className="App">
        <Sidebar showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <div className="map">
        <ReactMapGL
          mapboxApiAccessToken={API_KEY}
          {...viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          {schools.map((school) =>
            <Marker key={school.id} 
            latitude={school.geometry.coordinates[1]}
            longitude={school.geometry.coordinates[0]}
            
            >
              <img src="/graduation-hat.png" 
                alt="graduation hat" 
                className="marker-icon"/>
              <span className="marker-label">
                {school.properties.campus}
              </span>
            </Marker>
          )}
        </ReactMapGL>

        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank"
            rel="noopener noreferrer"
        >CC 3.0 BY</a></div>
      </div>
    );
  }
}


export default App;
