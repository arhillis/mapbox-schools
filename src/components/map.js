import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import SchoolMapDisplay from './school-map-display';

class Map extends Component {
    constructor(props){
        super(props)
        this.state = {...props}
    }

    render() {
        const {API_KEY, viewport} = this.state;
        const {schools} = this.props;
        
        return (
            <div className="map">
                <ReactMapGL
                mapboxApiAccessToken={API_KEY}
                {...viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                >
                {schools.map((school) =>
                    <SchoolMapDisplay school={school} key={school.id} />
                )}
                </ReactMapGL>
            </div>
        );
    }
}

export default Map;