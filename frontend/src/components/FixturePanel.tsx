import React from "react";
import Team from "./Team";
import formatFriendlyMatchTime from "../utils/FriendlyTime";

interface FixturePanelProps {
  fixtureData?: FixtureData;
}

interface FixtureData {
  json_id?: string;
  json_sort_key?: string;
  json_start_at?: string;
  json_ended_at?: string;
  json_court?: string;
  json_in_progress?: string;
  json_tournament_name?: string;
}

export default function FixturePanel(props: FixturePanelProps) {
  console.log(props);
  const friendlyTime = formatFriendlyMatchTime(
    props.fixtureData?.json_start_at,
  );
  return (
    <div className="fixture">
      <div className="fixture-title-bar">
        <span className="court">Court {props.fixtureData?.json_court}</span>
      </div>
      <div className="fixture-card">
        <div className="fixture-card-wrap">
          <div className="fixture-name">
            {props.fixtureData?.json_tournament_name}
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
