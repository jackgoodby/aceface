import React from "react";
import Team from "./Team";
import formatFriendlyMatchTime from "../utils/FriendlyTime";

interface FixturePanelProps {
  fixtureData?: FixtureData;
}

interface FixtureData {
  id?: string;
  sort_key?: string;
  scheduled_start_at?: string;
  actual_start_at?: string;
  ended_at?: string;
  court?: string;
  in_progress?: string;
  tournament_name?: string;
}

export default function FixturePanel(props: FixturePanelProps) {
  console.log(props);
  const friendlyTime = formatFriendlyMatchTime(
    props.fixtureData?.scheduled_start_at,
    props.fixtureData?.actual_start_at,
    props.fixtureData?.ended_at,
  );
  return (
    <div className="fixture">
      <div className="fixture-title-bar">
        <span className="court">Court {props.fixtureData?.court}</span>
      </div>
      <div className="fixture-card">
        <div className="fixture-card-wrap">
          <div className="fixture-name">
            {props.fixtureData?.tournament_name}
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
