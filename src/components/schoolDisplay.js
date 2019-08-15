import React, { Component } from 'react';

class SchoolDisplay extends Component {
    render() {
        const {properties: {campus}} = this.props.school;

        return (
            <div>
                <p>{campus}</p>
            </div>
        );
    }
}

export default SchoolDisplay;