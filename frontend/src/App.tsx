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
        AceFace will return... (watch out for live team match scores this
        autumn!).
      </p>
      <Matches />

      <p className="rights-notice">
        AceFace is created and maintained by Jack Goodby for JTBW Limited.
        Enquiries: jackgoodby@me.com
      </p>
    </>
  );
}

export default App;
