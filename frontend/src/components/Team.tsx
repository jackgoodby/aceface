import Player from "./Player";

interface Props {
  teamName: string;
}

interface Player {
  title: string;
  lastName: string;
  seed: string;
  profileUrl: string;
}

const playerJson: Player = {
  title: "TITLE",
  lastName: "LAST NAME",
  seed: "1",
  profileUrl: "/images/feds.png",
};

function Team(props: Props) {
  const player1 = true;
  const player2 = true;
  return (
    <div className={"team " + props.teamName}>
      <div className="players">
        <Player playerJson={playerJson} />
        {player2 && <Player playerJson={playerJson} />}
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
