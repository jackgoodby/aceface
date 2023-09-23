import React from "react";
import Team from "./Team";
import formatFriendlyMatchTime from "../utils/FriendlyTime";
import { TeamData } from "../types/TeamData";
import { FixtureData } from "../types/FixtureData";

interface FixturePanelProps {
  fixtureData?: FixtureData;
}

//
// set up some temp data for team
//
const TeamA: TeamData = {
  id: "ID",
  sort_key: "TEAMA",
  seed: 2,
  players: [
    {
      title: "Ms. N.",
      last_name: "Hatton",
      seed: 2,
    },
  ],
};
const TeamB: TeamData = {
  id: "ID",
  sort_key: "TEAMB",
  seed: 1,
  players: [
    {
      title: "Ms. M.",
      last_name: "Oddland",
      seed: 1,
    },
  ],
};
//
// end team data setup
//

export default function FixturePanel(props: FixturePanelProps) {
  console.log(props);
  const friendlyTime = formatFriendlyMatchTime(
    props.fixtureData?.scheduled_start_at,
    props.fixtureData?.actual_start_at,
    props.fixtureData?.ended_at,
  );
  const startStatusClass = props.fixtureData?.actual_start_at
    ? " started"
    : " not-started";
  const gameTypeClass = TeamA.players.length == 1 ? " singles" : " doubles";
  const courtName =
    props.fixtureData?.court == "1"
      ? "Centre Court"
      : "Court " + props.fixtureData?.court;
  return (
    <div className={"fixture" + startStatusClass + gameTypeClass}>
      <div className="fixture-title-bar">
        <span className="court">{courtName}</span>
      </div>
      <div className="fixture-card">
        <div className="fixture-card-wrap">
          <div className="fixture-name">
            {props.fixtureData?.tournament_name}
          </div>
          <Team teamData={TeamA} />
          <Team teamData={TeamB} />
          <div className="fixture-status">
            <div className="duration">{friendlyTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
