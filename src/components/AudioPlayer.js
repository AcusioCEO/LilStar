import React, { Component } from "react";

class AudioPlayer extends Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + "/roxstarLogo.png"} alt="CoverArt" />
        <audio controls="controls" id="audio_player">
          <source
            src={process.env.PUBLIC_URL + "/Faded.mp3"}
            type="audio/mpeg"
          />
        </audio>
      </div>
    );
  }
}
export default AudioPlayer;
