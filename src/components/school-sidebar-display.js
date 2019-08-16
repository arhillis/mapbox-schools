import React, { Component } from 'react';

class SchoolSidebarDisplay extends Component {
    render() {
        const {properties: {campus, address: {street, zipCode}}} = this.props.school;

        return (
            <li>
                <h3>{campus}</h3>
                <p>{street}</p>
                <p>Texarkana, TX {zipCode}</p>
            </li>
        );
    }
}

export default SchoolSidebarDisplay;