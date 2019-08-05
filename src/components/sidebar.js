import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.toggleSidebar = props.toggleSidebar.bind(this)
    }
    
    render() {
        return (
            <div className={this.props.showSidebar ? "sidebar shown" : "sidebar hidden"}>
                <button className="sidebar-btn"
                        onClick={this.toggleSidebar}
                >X</button>
            </div>
        );
    }
}

export default Sidebar;