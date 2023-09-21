import Player from './Player';

function Team() {
    const teamName = 'teama';
    return <div className="team {teamName}">
            <div className="players">
                <Player />
                <Player />
            </div>
            <div className="scores"><span className="point">40</span><span className="set-game">7</span><span className="set-game">4</span><span className="set-game"> </span></div>
        </div>
}

export default Team