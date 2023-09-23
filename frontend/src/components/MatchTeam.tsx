import Player from "./Player";
import { MatchTeamData } from "../types/MatchTeamData";

interface TeamProps {
  teamData: MatchTeamData;
}

export default function MatchTeam(props: TeamProps) {
  const player1 = props.teamData.players[0];
  const player2 = props.teamData.players[1];
  const set1score = props.teamData.scores[0] ? props.teamData.scores[0] : "-";
  const set2score = props.teamData.scores[1] ? props.teamData.scores[1] : "-";
  const set3score = props.teamData.scores[2] ? props.teamData.scores[2] : "-";
  return (
    <div className={"team " + props.teamData.id}>
      <div className={"players"}>
        <Player playerData={player1} />
        {player2 && <Player playerData={player2} />}
      </div>
      <div className="scores">
        {set1score && <span className="set-game">{set1score}</span>}
        {set2score && <span className="set-game">{set2score}</span>}
        {set3score && <span className="set-game">{set3score}</span>}
      </div>
    </div>
  );
}
