import { MatchData } from "../types/MatchData";

const fixture6: MatchData = {
  scheduled_start_at: "2023-09-23T12:00:00Z",
  actual_start_at: "2023-09-23T12:00:00Z",
  ended_at: "2023-09-23T13:30:00Z",
  court: "7",
  tournament_name: "Veteran Mixed Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. L.",
        last_name: "Hathaway",
      },
      {
        title: "Mr. S.",
        last_name: "Hathaway",
      },
    ],
    scores: [3, 1],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. J.",
        last_name: "Skym",
        seed: 1,
      },
      {
        title: "Mr. M.",
        last_name: "Luckley",
        seed: 1,
      },
    ],
    scores: [6, 6],
  },
};

export default fixture6;
