import React from "react";
import MatchTeam from "./MatchTeam";
import formatFriendlyMatchTime from "../utils/FriendlyTime";
import { MatchData } from "../types/MatchData";

interface FlatMatchProps {
  matchData: MatchData;
}

export default function FlatMatch(props: FlatMatchProps) {
  const friendlyTime = formatFriendlyMatchTime(
    props.matchData.scheduled_start_at,
    props.matchData.actual_start_at,
    props.matchData.ended_at,
  );
  const startStatusClass = props.matchData.actual_start_at
    ? " started"
    : " not-started";
  const gameTypeClass =
    props.matchData.team_a.players.length == 1 ? " singles" : " doubles";
  const courtName =
    props.matchData.court == "1"
      ? "Centre Court"
      : "Court " + props.matchData.court;
  return (
    <div className={"fixture" + startStatusClass + gameTypeClass}>
      <div className="fixture-title-bar">
        <span className="court">{props.matchData.tournament_name}</span>
      </div>
      <div className="fixture-card">
        <div className="fixture-card-wrap">
          {/*<div className="fixture-name">{courtName}</div>*/}
          <MatchTeam teamData={props.matchData.team_a} />
          <MatchTeam teamData={props.matchData.team_b} />
          <div className="fixture-status">
            <div className="duration">{friendlyTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
