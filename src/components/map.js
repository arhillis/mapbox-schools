import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

class Map extends Component {
    constructor(props){
        super(props)
        this.state = {...this.props}
    }

    render() {
        const {API_KEY, viewport, schools} = this.state;
        return (
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
        );
    }
}

export default Map;