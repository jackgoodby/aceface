import Fixtures from './components/Fixtures';

function App() {
    return (
        <div id={"app"}>
            <div id="banner">
                <img src="public/images/sltc-logo.png" alt="Stourbridge Tennis Club Logo" width="50" />
            </div>
            <Fixtures />
        </div>
    )
}

export default App;