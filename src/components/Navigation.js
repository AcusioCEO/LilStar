import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact </NavLink>
          </li>
          <li>
            <NavLink to="/Content">Content</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
