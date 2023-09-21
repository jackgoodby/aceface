interface Props {
  playerJson: {
    title: string;
    lastName: string;
    seed: string;
    profileUrl: string;
  };
}

function Player(props: Props) {
  return (
    <div className="player">
      <img src={props.playerJson.profileUrl} className="playerimage" />
      {props.playerJson.title}
      <br />
      {props.playerJson.lastName}
      <span className="seed"> ({props.playerJson.seed})</span>
    </div>
  );
}

export default Player;
