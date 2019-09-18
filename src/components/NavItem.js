import React from "react";
import { NavLink } from "react-router-dom";

export default class NavItem extends React.Component {
  render() {
    const { iconName, to, children } = this.props;

    return (
      <li>
        <NavLink activeClassName="active" to={to}>
          <i className="material-icons">{iconName}</i>
          <p>{children}</p>
        </NavLink>
      </li>
    );
  }
}
