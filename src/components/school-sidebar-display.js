import React, { Component } from 'react';

class SchoolSidebarDisplay extends Component {
    render() {
        const {properties: {campus, address: {street, zipCode}, phoneNumber}} = this.props.school;

        return (
            <li>
                <h3>{campus}</h3>
                <p>{street}</p>
                <p>{zipCode === "75569" ? "Nash" : "Texarkana"}, TX {zipCode}</p>
                <p>{phoneNumber}</p>
            </li>
        );
    }
}

export default SchoolSidebarDisplay;