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
      searchValue: "",
      API_KEY: 'pk.eyJ1IjoiYW5kcmllbGxlaCIsImEiOiJjanl1cm96bGIwNDkwM21taXhwdzI4YTh1In0.h4LtxhhhtJFzWbBAwSAtrg'
    }
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value})
  }

  toggleSidebar = () =>{
    this.setState(prevState => {
        return {showSidebar: !prevState.showSidebar}
    })
  }  

  render() {
    const {API_KEY, viewport, schools, searchValue} = this.state;   

    const regex = new RegExp(searchValue.toLowerCase()) ;
    const results = searchValue.length === 0 ? schools : schools.filter(school => regex.test(school.properties.campus.toLowerCase()));

    return (
      <div className="App">
        <Sidebar 
          searchResults={results}
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
          searchValue={searchValue}
          handleChange={this.handleChange}
        />
        <Map API_KEY={API_KEY}
          viewport={{...viewport}}
          schools={[...results]}
        />        
        
      </div>
    );
  }
}


export default App;
