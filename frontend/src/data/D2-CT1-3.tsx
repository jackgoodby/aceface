import { MatchData } from "../types/MatchData";

const fixture11: MatchData = {
  scheduled_start_at: "2023-09-24T16:00:00Z",
  actual_start_at: "2023-09-24T15:55:00Z",
  ended_at: "",
  court: "1",
  tournament_name: "Mixed Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. J.",
        last_name: "Skym",
        seed: 3,
      },
      {
        title: "Mr. M.",
        last_name: "Luckley",
        seed: 3,
      },
    ],
    scores: [2, 6, 2],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Mr. O.",
        last_name: "Hicks",
        seed: 7,
      },
      {
        title: "Ms. M.",
        last_name: "Odland",
        seed: 7,
      },
    ],
    scores: [6, 2, 1],
  },
};

export default fixture11;
