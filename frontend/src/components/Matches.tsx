import FlatMatch from "./FlatMatch";
import React from "react";
import fixture1 from "../data/D1-CT1-1";
import fixture2 from "../data/D1-CT1-2";
import fixture4 from "../data/D1-CT5-1";
import fixture6 from "../data/D1-CT7-1";

export default function Matches() {
  return (
    <div id="fixtures">
      <FlatMatch matchData={fixture2} />
      <FlatMatch matchData={fixture1} />
      <FlatMatch matchData={fixture4} />
      <FlatMatch matchData={fixture6} />
    </div>
  );
}
