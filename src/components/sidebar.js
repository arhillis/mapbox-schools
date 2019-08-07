import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.toggleSidebar = props.toggleSidebar.bind(this)
    }
    
    render() {
        const {showSidebar, schools} = this.props;
        console.log(schools);
        return (
            <div className={showSidebar ? "sidebar shown" : "sidebar hidden"}>
                <button className="sidebar-btn"
                        onClick={this.toggleSidebar}
                >X</button>
                <input type="text" className="searchbox" list="keywords"/>
                <datalist id="keywords">
                    {schools.map(school =>(
                        <option 
                            key={school.id}
                            value={school.properties.campus}
                        ></option>
                    ))}
                </datalist>
            </div>
        );
    }
}

export default Sidebar;