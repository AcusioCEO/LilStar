import React, { Component } from "react";

//import styles
import "./styles/App.css";
import "./styles/Navigation.css";
import "./styles/AudioPlayer.css";

// import Home from "./components/Home";
import Navigation from "./components/Navigation";
import AudioPlayer from "./components/AudioPlayer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <br />
        <Navigation />
        <hr />

        <AudioPlayer />
        {/* <MusicPlayer playlist={playlist} /> */}
        <hr />
      </div>
    );
  }
}

export default App;
