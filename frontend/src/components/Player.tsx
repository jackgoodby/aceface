function Player() {
    // needs to accept a player as param
    const playerTitle = 'TITLE'
    const playerLName = 'LASTNAME'
    const seed = 'SEED' // needs to be optional
    return (
        <div className="player">
            <img src="/images/feds.png" className="playerimage" />
            {playerTitle}<br />{playerLName}<span className="seed"> ({seed})</span>
        </div>
        )
}

export default Player