import React from 'react';

import NavItem from './NavItem';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar" data-color="purple">
                <div className="logo">
                    <a href="#" className="simple-text">
                        Swah-Pee
                    </a>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <NavItem to="/" onlyActiveOnIndex iconName="home" index={true}>Home</NavItem>
                        <NavItem to="people" iconName="person_outline">People</NavItem>
                        <NavItem to="film" iconName="camera_enhance">Film</NavItem>
                        <NavItem to="starships" iconName="flight_takeoff">Starships</NavItem>
                        <NavItem to="vehicle" iconName="drive_eta">Vehicle</NavItem>
                        <NavItem to="species" iconName="av_timer">Species</NavItem>
                        <NavItem to="planet" iconName="extension">Planet</NavItem>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;