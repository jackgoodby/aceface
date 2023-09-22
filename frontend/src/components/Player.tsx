import { PlayerData } from "../types/PlayerData";
import React from "react";

interface PlayerProps {
  playerData?: PlayerData;
}

function Player(props: PlayerProps) {
  return (
    <div className="player">
      {props.playerData?.profileUrl && (
        <img src={props.playerData?.profileUrl} className="playerimage" />
      )}
      {props.playerData?.title} {props.playerData?.lastName}
      {props.playerData?.seed && (
        <span className="seed"> ({props.playerData?.seed})</span>
      )}
    </div>
  );
}

export default Player;
