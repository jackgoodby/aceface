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

export default function Matches() {
  return (
    <div id="fixtures">
      <FlatMatch matchData={fixture3} />
      <FlatMatch matchData={fixture8} />
      <FlatMatch matchData={fixture2} />
      <FlatMatch matchData={fixture5} />
      <FlatMatch matchData={fixture7} />
      <FlatMatch matchData={fixture1} />
      <FlatMatch matchData={fixture4} />
      <FlatMatch matchData={fixture6} />
    </div>
  );
}
