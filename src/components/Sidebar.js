import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" data-color="purple">
        <div className="logo">
          <Link to="/" className="simple-text">
            Swah-Pee
          </Link>
        </div>

        <div className="sidebar-wrapper">
          <ul className="nav">
            <NavItem to="/" iconName="home" index={true}>
              Home
            </NavItem>
            <NavItem to="people" iconName="person_outline">
              People
            </NavItem>
            <NavItem to="film" iconName="camera_enhance">
              Film
            </NavItem>
            <NavItem to="starships" iconName="flight_takeoff">
              Starships
            </NavItem>
            <NavItem to="vehicle" iconName="drive_eta">
              Vehicle
            </NavItem>
            <NavItem to="species" iconName="av_timer">
              Species
            </NavItem>
            <NavItem to="planet" iconName="extension">
              Planet
            </NavItem>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
