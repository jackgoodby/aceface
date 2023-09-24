import { MatchData } from "../types/MatchData";

const fixture10: MatchData = {
  scheduled_start_at: "2023-09-24T14:00:00Z",
  actual_start_at: "2023-09-24T13:35:00Z",
  ended_at: "2023-09-24T15:15:00Z",
  court: "1",
  tournament_name: "Ladies' Doubles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. N.",
        last_name: "Hatton",
        seed: 2,
      },
      {
        title: "Ms. J.",
        last_name: "Skym",
        seed: 2,
      },
    ],
    scores: [7, 6],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. A.",
        last_name: "Bolfa",
        seed: 3,
      },
      {
        title: "Ms. M.",
        last_name: "Odland",
        seed: 3,
      },
    ],
    scores: [6, 1],
  },
};

export default fixture10;
