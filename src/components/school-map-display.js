import React, { Component } from 'react';
import {Marker} from 'react-map-gl';


class SchoolMapDisplay extends Component {
    render() {
        const {school} = this.props;
        return (
            <Marker key={school.id} 
                latitude={school.geometry.coordinates[1]}
                longitude={school.geometry.coordinates[0]}                    
            >
                    <img src="/graduation-hat.png" 
                        alt="graduation hat" 
                        className="marker-icon"
                    />
                    <span className="marker-label">
                        {school.properties.campus}
                    </span>
            </Marker>
        );
    }
}

export default SchoolMapDisplay;