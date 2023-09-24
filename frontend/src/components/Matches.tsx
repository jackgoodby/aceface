import FlatMatch from "./FlatMatch";
import React from "react";
import fixture1 from "../data/D1-CT1-1";
import fixture2 from "../data/D1-CT1-2";
import fixture3 from "../data/D1-CT1-3";
import fixture4 from "../data/D1-CT5-1";
import fixture5 from "../data/D1-CT5-2";
import fixture6 from "../data/D1-CT7-1";
import fixture7 from "../data/D1-CT7-2";
import fixture8 from "../data/D1-CT7-3";
import fixture9 from "../data/D2-CT1-1";
import fixture10 from "../data/D2-CT1-2";
import fixture11 from "../data/D2-CT1-3";
import fixture12 from "../data/D2-CT5-1";
import fixture13 from "../data/D2-CT5-2";
import fixture14 from "../data/D2-CT7-1";
import fixture15 from "../data/D2-CT7-2";

export default function Matches() {
  return (
    <div id="fixtures">
      <FlatMatch matchData={fixture11} />
      <FlatMatch matchData={fixture15} />
      <div className="fullwidth-title-bar">Played</div>
      <FlatMatch matchData={fixture10} />
      <FlatMatch matchData={fixture13} />
      <FlatMatch matchData={fixture14} />
      <FlatMatch matchData={fixture9} />
      <FlatMatch matchData={fixture12} />

      <div className="fullwidth-title-bar">Yesterday's Matches</div>
      <FlatMatch matchData={fixture8} />
      <FlatMatch matchData={fixture3} />
      <FlatMatch matchData={fixture2} />
      <FlatMatch matchData={fixture5} />
      <FlatMatch matchData={fixture7} />
      <FlatMatch matchData={fixture1} />
      <FlatMatch matchData={fixture4} />
      <FlatMatch matchData={fixture6} />
    </div>
  );
}
