import React from "react";
import ReactTimeAgo from "react-time-ago";
import Team from "./Team";

interface Props {
  fixtureData: Fixture;
}

interface Fixture {
  json_id: string;
  json_sort_key: string;
  json_start_at: string;
  json_ended_at: string;
  json_court: string;
  json_in_progress: string;
  json_tournament_name: string;
}

function msToTime(duration: number) {
  const minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + " hour " + minutes + " minutes";
}

function Fixture(props: Props) {
  // const eventStartTime = new Date(props.fixtureData.json_start_at);
  const eventStartTime = new Date("2023-09-22T04:00:00");
  const eventEndTime = Date.now();
  const duration = eventEndTime.valueOf() - eventStartTime.valueOf();
  const friendlyTime = msToTime(duration);
  return (
    <div className="fixture">
      <div className="fixture-title-bar">
        <span className="court">Court {props.fixtureData.json_court}</span>
      </div>
      <div className="fixture-card">
        <div className="fixture-card-wrap">
          <div className="fixture-name">
            {props.fixtureData.json_tournament_name}
          </div>
          <Team teamName="teama" />
          <Team teamName="teamb" />
          <div className="fixture-status">
            <div className="duration">{friendlyTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fixture;
