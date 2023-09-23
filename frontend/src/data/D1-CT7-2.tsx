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
        seed: 2,
      },
      {
        title: "Ms. T.",
        last_name: "Jones",
        seed: 2,
      },
    ],
    scores: [1, 2],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. H.",
        last_name: "Walker",
        seed: 1,
      },
      {
        title: "Ms. J.",
        last_name: "Skym",
        seed: 1,
      },
    ],
    scores: [6, 5],
  },
};

export default fixture7;
