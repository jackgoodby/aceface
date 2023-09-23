import { MatchData } from "../types/MatchData";

const fixture1: MatchData = {
  scheduled_start_at: "2023-09-23T12:00:00Z",
  actual_start_at: "2023-09-23T12:00:00Z",
  ended_at: "2023-09-23T13:20:00Z",
  court: "1",
  tournament_name: "Ladies' Singles Final",
  team_a: {
    id: "teama",
    players: [
      {
        title: "Ms. N.",
        last_name: "Hatton",
        seed: 2,
      },
    ],
    scores: [3, 4],
  },
  team_b: {
    id: "teamb",
    players: [
      {
        title: "Ms. M.",
        last_name: "Odland",
        seed: 1,
      },
    ],
    scores: [6, 6],
  },
};

export default fixture1;
