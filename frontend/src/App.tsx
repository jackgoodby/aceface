import Matches from "./components/Matches";
import React from "react";

function App() {
  return (
    <>
      <div id="banner">
        <img
          src="/images/sltc-logo.png"
          alt="Stourbridge Tennis Club Logo"
          width="50"
        />
      </div>
      <h1>Stourbridge Lawn Tennis and Squash Club</h1>
      <h2>Club Championships, 2023</h2>

      <p>
        Congratulations from AceFace to all participants and organisers of a
        fantastic tournament.
      </p>

      <p>
        AceFace shall return... (watch out for live team match scores this
        autumn)
      </p>
      <Matches />
    </>
  );
}

export default App;
