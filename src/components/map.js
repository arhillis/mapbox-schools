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
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank"
                    rel="noopener noreferrer"
                >CC 3.0 BY</a></div>
            </div>
        );
    }
}

export default Map;