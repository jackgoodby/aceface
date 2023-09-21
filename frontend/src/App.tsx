import Fixture from './Fixture';
import Player from './components/Team';

function App() {
    return <div><Fixture />
        <div className="players">
            <Player />
            <Player />
        </div>
    </div>;
}
export default App;