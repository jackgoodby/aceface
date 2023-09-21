function Player() {
    const playerTitle = 'Ms. S.'
    const playerLName = 'BARTLETT'
    const seed = '1'
    return <div className="player">
    <img src="/images/feds.png" className="playerimage" />
    {playerTitle}<br />{playerLName}<span className="seed"> ({1})</span>
    </div>;
}

export default Player