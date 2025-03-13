import React from "react";
import "./player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" srcset="" />
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/2T7dHo2inDs?si=IODhzAhkB4DgWcQE"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Publish Date</p>
        <p>Name</p>
        <p>type</p>
      </div>
    </div>
  );
};

export default Player;
