import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

//import Routes

//import styles
import "./styles/App.css";
import "./styles/Navigation.css";
import "./styles/AudioPlayer.css";

// import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Routing from "./routes/Routing";
import AudioPlayer from "./components/AudioPlayer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <br />
          <br />
          <Routing />
          <AudioPlayer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
