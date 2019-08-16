import React, { Component } from 'react';
import SchoolSidebarDisplay from './school-sidebar-display';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: []
        }
        this.toggleSidebar = props.toggleSidebar.bind(this)      
        this.handleChange = props.handleChange.bind(this)

    }

    
    render() {
        const {showSidebar, searchResults, searchValue} = this.props;

        return (
            <div className={showSidebar ? "sidebar shown" : "sidebar hidden"}>
                <button className="sidebar-btn"
                        onClick={this.toggleSidebar}
                >X</button>
                <input type="text" 
                    className="searchbox" 
                    list="keywords"
                    value={searchValue}
                    onChange={this.handleChange}
                />
                <ul className="school-list">
                    {searchResults.map(school => 
                        <SchoolSidebarDisplay school={school} key={school.id}/>
                    )}
                </ul>        
                
            </div>
        );
    }
}

export default Sidebar;