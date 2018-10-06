import React, { Component } from "react";
import "./App.css";
import MusicPlayer from "react-responsive-music-player";

//importing components
import Home from "./components/Home";

const playlist = [
  {
    url: process.env.PUBLIC_URL + "/Faded.mp3",
    cover: process.env.PUBLIC_URL + "/roxstarLogo.png",
    title: "Faded",
    artist: ["Lil Star"]
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <MusicPlayer playlist={playlist} />
      </div>
    );
  }
}

export default App;
