import { MatchData } from "../types/MatchData";

const fixture7: MatchData = {
  scheduled_start_at: "2023-09-23T14:00:00Z",
  actual_start_at: "2023-09-23T14:00:00Z",
  ended_at: "",
  court: "7",
  tournament_name: "Veteran Ladies' Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. K.",
        last_name: "Hill",
      },
      {
        title: "Ms. T.",
        last_name: "Jones",
      },
    ],
    scores: [],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. H.",
        last_name: "Walker",
      },
      {
        title: "Ms. J.",
        last_name: "Skym",
      },
    ],
    scores: [],
  },
};

export default fixture7;
