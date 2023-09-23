import React from "react";
import Team from "./Team";
import formatFriendlyMatchTime from "../utils/FriendlyTime";
import { PlayerData } from "../types/PlayerData";
import { TeamData } from "../types/TeamData";

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

//
// set up some temp data for team
//
const Player1: PlayerData = {
  title: "Ms. J.",
  last_name: "Skym",
  seed: 1,
};
const Player2: PlayerData = {
  title: "Ms. J.",
  last_name: "Brayshay",
  seed: 1,
};
const Player3: PlayerData = {
  title: "Ms. L.",
  last_name: "Hathaway",
};
const Player4: PlayerData = {
  title: "Ms. A.",
  last_name: "Reeve",
};
const TeamA: TeamData = {
  id: "ID",
  sort_key: "TEAMA",
  seed: 1,
  players: [Player1, Player2],
};
const TeamB: TeamData = {
  id: "ID",
  sort_key: "TEAMB",
  seed: 0,
  players: [Player3, Player4],
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
  const startStatusClass = " not-started";
  const courtName =
    props.fixtureData?.court == "1"
      ? "Centre Court"
      : "Court " + props.fixtureData?.court;
  return (
    <div className={"fixture" + startStatusClass}>
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
