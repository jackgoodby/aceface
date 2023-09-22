import Player from "./Player";
import { TeamData } from "../types/TeamData";

interface TeamProps {
  teamData?: TeamData;
}

function Team(props: TeamProps) {
  const player2 = props.teamData?.player2;
  return (
    <div className={"team " + props.teamData?.sort_key}>
      <div className="players">
        <Player playerData={props.teamData?.player1} />
        {props.teamData?.player2 && (
          <Player playerData={props.teamData?.player2} />
        )}
      </div>
      <div className="scores">
        <span className="point">40</span>
        <span className="set-game">7</span>
        <span className="set-game">4</span>
        <span className="set-game"> </span>
      </div>
    </div>
  );
}

export default Team;
