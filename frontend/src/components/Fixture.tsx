import Team from './Team'

function Fixture(){
    const courtName = 'Centre Court'
    return (
        <div className="fixture">
            <div className="fixture-title-bar">
                <span className="court">COURT NAME</span>
            </div>
            <div className="fixture-card">
                <div className="fixture-card-wrap">
                    <div className="fixture-name">FIXTURE NAME</div>
                    <Team />
                    <Team />
                    <div className="fixture-status">
                        <div className="duration">Duration: H:MM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fixture;