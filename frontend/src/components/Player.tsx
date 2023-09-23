import { PlayerData } from "../types/PlayerData";
import React from "react";

interface PlayerProps {
  playerData?: PlayerData;
}

function Player(props: PlayerProps) {
  return (
    <div className="player doubles">
      {props.playerData?.profile_url && (
        <img src={props.playerData?.profile_url} className="playerimage" />
      )}
      {props.playerData?.title} {props.playerData?.last_name}
      {props.playerData?.seed && (
        <span className="seed"> ({props.playerData?.seed})</span>
      )}
    </div>
  );
}

export default Player;
