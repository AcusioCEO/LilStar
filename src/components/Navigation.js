import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    );
  }
}
export default Navigation;
