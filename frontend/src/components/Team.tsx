import Player from "./Player";
import { TeamData } from "../types/TeamData";

interface TeamProps {
  teamData?: TeamData;
}

function Team(props: TeamProps) {
  const player1 = props.teamData?.players[0];
  const player2 = props.teamData?.players[1];
  // const set1score = props.teamData?.scores;
  return (
    <div className={"team " + props.teamData?.sort_key?.toLowerCase()}>
      <div className={"players"}>
        <Player playerData={player1} />
        {player2 && <Player playerData={player2} />}
      </div>
      <div className="scores">
        <span className="set-game">-</span>
        <span className="set-game">-</span>
        <span className="set-game">-</span>
      </div>
    </div>
  );
}

export default Team;
