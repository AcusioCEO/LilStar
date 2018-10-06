import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/roxstarLogo.png"}
          alt="logo"
          style={{
            width: "15em",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <h1 style={{ textAlign: "center" }}>Lil Star</h1>
        <hr />
      </div>
    );
  }
}
export default Home;
